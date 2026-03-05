const fs = require('fs');
const path = require('path');

function processDir(dir) {
    fs.readdirSync(dir).forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            if (fullPath.includes('node_modules') || fullPath.includes('.git') || fullPath.includes('dist')) return;
            processDir(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let orig = content;

            // Change to-orange-500 or 400 to to-orange-600
            content = content.replace(/to-orange-(400|500)/g, 'to-orange-600');
            // Change from-orange-500 or 400 to from-orange-600
            content = content.replace(/from-orange-(400|500)/g, 'from-orange-600');

            // Any leftover orange-500 or orange-400 should be orange-600
            content = content.replace(/orange-500/g, 'orange-600');
            content = content.replace(/orange-400/g, 'orange-600');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDir('./src');
