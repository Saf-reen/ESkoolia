const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace CSS HSL values for the purple palette with the Green #276221 palette
        // 114 50% 26% was the primary purple. #276221 is ~ 114 50% 26%
        content = content.replace(/114 50% 26%/g, '114 50% 26%');
        content = content.replace(/114 50% 10%/g, '114 50% 10%');
        content = content.replace(/114 50% 16%/g, '114 50% 16%');
        content = content.replace(/114 50% 34%/g, '114 50% 34%');
        content = content.replace(/114 50% 20%/g, '114 50% 20%');

        // Replace hex codes
        content = content.replace(/#276221/gi, '#276221');
        content = content.replace(/#276221/gi, '#276221');
        content = content.replace(/#276221/gi, '#276221');

        if (content !== original) {
            fs.writeFileSync(filePath, content, 'utf8');
            console.log('Updated', filePath);
        }
    } catch (err) {
        console.error('Error processing', filePath, err.message);
    }
}

function processDir(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDir(fullPath);
        } else if (/\.(html|tsx|ts|css|js|jsx)$/.test(file)) {
            replaceInFile(fullPath);
        }
    }
}

processDir(process.cwd());
console.log('Done');
