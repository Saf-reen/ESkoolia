import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ErrorBoundary } from "./components/ErrorBoundary";

// Plus Jakarta Sans (Body)
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";

// Outfit (Headings)
import "@fontsource/outfit/500.css";
import "@fontsource/outfit/600.css";
import "@fontsource/outfit/700.css";

const root = document.getElementById("root");
if (root) {
    createRoot(root).render(
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    );

    // Remove the splash screen smoothly after mounting
    const splash = document.getElementById("splash-screen");
    if (splash) {
        // Add a slight delay to ensure first paint is complete
        setTimeout(() => {
            splash.style.opacity = "0";
            setTimeout(() => splash.remove(), 600); // Wait for transition
        }, 100);
    }
}
