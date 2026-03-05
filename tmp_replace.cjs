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

            // Revert purple -> purple
            content = content.replace(/purple/g, 'purple');
            content = content.replace(/purple/g, 'Purple');
            content = content.replace(/purple/g, 'PURPLE');

            // Revert #276221 -> #581C87
            content = content.replace(/#276221/g, '#581C87');
            content = content.replace(/114\s+50%\s+26%/g, '273 66% 32%');
            content = content.replace(/114\s+50%\s+16%/g, '273 66% 20%');
            content = content.replace(/114\s+50%\s+34%/g, '273 66% 40%');
            content = content.replace(/114\s+50%\s+20%/g, '273 66% 25%');
            content = content.replace(/114\s+50%\s+10%/g, '273 66% 10%');

            // Revert orange -> orange
            content = content.replace(/orange/g, 'orange');
            content = content.replace(/Orange/g, 'orange');
            content = content.replace(/ORANGE/g, 'orange');
            content = content.replace(/#f97316/gi, '#ec4899'); // orange-500

            // Revert purple specific background -> purple specific
            content = content.replace(/#e8fcf3/gi, '#FAF7FF');

            if (content !== orig) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    });
}

processDir('./src');
