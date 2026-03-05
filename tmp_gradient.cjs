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

            // Replace text-orange-* with background-clip text gradient
            content = content.replace(/text-orange-(\d+)/g, 'text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-$1');

            // Replace bg-orange-* with background gradient
            content = content.replace(/bg-orange-(\d+)(?!\/)/g, 'bg-gradient-to-r from-purple-600 to-orange-$1');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDir('./src');
