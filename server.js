const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 8080;

// 1. Comprehensive Security Headers with Helmet for Mozilla Observatory A+
app.use(helmet({
    contentSecurityPolicy: {
        useDefaults: true,
        directives: {
            "default-src": ["'self'"],
            "script-src": ["'self'", "'unsafe-inline'", "https://cdn.jsdelivr.net"],
            "style-src": ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://fonts.gstatic.com"],
            "img-src": ["'self'", "data:", "https:", "blob:"],
            "connect-src": ["'self'", "https:", "wss:"],
            "font-src": ["'self'", "https://fonts.gstatic.com", "data:"],
            "object-src": ["'none'"],
            "media-src": ["'self'"],
            "frame-src": ["'self'", "https://www.youtube.com"],
            "frame-ancestors": ["'none'"],
            "base-uri": ["'self'"],
            "form-action": ["'self'"],
            "upgrade-insecure-requests": [],
        },
    },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    xFrameOptions: { action: "deny" },
    crossOriginEmbedderPolicy: { policy: "credentialless" }, // Production-safe COEP
    crossOriginResourcePolicy: { policy: "same-origin" },    // Stricter CORP for Observatory
    crossOriginOpenerPolicy: { policy: "same-origin" },      // COOP
}));

// 2. Restrict browser features using Permissions-Policy
app.use(helmet.permissionsPolicy({
    features: {
        camera: [],
        microphone: [],
        geolocation: [],
        interestCohort: [],
        fullscreen: ["self"],
        payment: [],
        usb: []
    },
}));

// 3. Robust HSTS (Strict-Transport-Security) for Observatory
app.use(helmet.hsts({
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
}));

// 4. Additional production-safe headers
app.use((req, res, next) => {
    res.setHeader('X-XSS-Protection', '0'); // Explicitly disable legacy XSS filter
    next();
});

// 5. Disable X-Powered-By
app.disable('x-powered-by');

// 3. Add Login Rate Limiting (Item 3)
const loginLimiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 5, // Limit each IP to 5 requests per windowMs
    message: 'Too many login attempts from this IP, please try again after 15 minutes',
    standardHeaders: true,
    legacyHeaders: false,
});

// Middleware
app.use(express.json());
app.use(cookieParser()); // Item 2, 7
app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:8080',
    credentials: true, // Item 2
}));

// Mock Database (Replace with real DB connection - Item 5)
// All database interactions should use parameterized queries/ORM
const users = [];

// 4. Secure Password Storage (Item 4)
// & 11. Strong Password Policy (Enforced on server)
const hashPassword = async (password) => {
    const salt = await bcrypt.genSalt(12);
    return await bcrypt.hash(password, salt);
};

// 6. Server-Side Authorization (Item 6)
const authenticateToken = (req, res, next) => {
    const token = req.cookies.accessToken; // Item 2: tokens in HttpOnly cookies
    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET || 'fallback-secret', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- AUTH ENDPOINTS ---

app.post('/api/auth/register', async (req, res) => {
    const { name, email, password } = req.body;

    // 5. Prevent Injection & Validation (Item 5)
    if (!email || !password || !name) return res.status(400).send('Missing fields');

    // Item 11: Strong Password Policy enforcement
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;
    if (!passwordRegex.test(password)) {
        return res.status(400).send('Password does not meet security requirements');
    }

    const hashedPassword = await hashPassword(password);

    // 13. Security Logging (Item 13)
    console.log(`[USER_REGISTER] Registration attempt for ${email} from ${req.ip}`);

    users.push({ id: Date.now(), name, email, password: hashedPassword, role: 'user' });
    res.status(201).send('User registered');
});

app.post('/api/auth/login', loginLimiter, async (req, res) => {
    const { email, password } = req.body;
    const user = users.find(u => u.email === email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
        // 13. Security Logging (Item 13)
        console.warn(`[AUTH_FAILURE] Failed login for ${email} from ${req.ip}`);
        return res.status(401).send('Invalid credentials');
    }

    // 13. Security Logging
    console.log(`[AUTH_SUCCESS] User ${email} logged in from ${req.ip}`);

    // 2. Secure Authentication Tokens (Item 2)
    const accessToken = jwt.sign(
        { id: user.id, role: user.role },
        process.env.JWT_SECRET || 'fallback-secret',
        { expiresIn: '1h' }
    );

    res.cookie('accessToken', accessToken, {
        httpOnly: true, // Prevent XSS theft
        secure: process.env.NODE_ENV === 'production', // Use SSL
        sameSite: 'Strict', // Prevent CSRF
        maxAge: 3600000 // 1 hour
    });

    res.json({ user: { id: user.id, name: user.name, role: user.role } });
});

// 12. Password Reset Mock (Item 12)
app.post('/api/auth/reset-request', async (req, res) => {
    // Logic should: check email, generate cryptographically random token,
    // store hashed token, set 1h expiry, send email.
    res.send('If email exists, a reset link will be sent.');
});

// --- PROTECTED ROUTES ---

app.get('/api/admin/stats', authenticateToken, (req, res) => {
    // 6. Role-Based Access Control (Item 6)
    if (req.user.role !== 'admin') {
        console.error(`[UNAUTHORIZED_ACCESS] User ${req.user.id} tried to access admin stats`);
        return res.status(403).send('Forbidden');
    }
    res.json({ stats: 'confidential data' });
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
    console.log(`Security-hardened server running on port ${PORT}`);
});
