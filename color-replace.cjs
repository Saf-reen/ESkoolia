const fs = require('fs');
const path = require('path');

function replaceInFile(filePath) {
    try {
        let content = fs.readFileSync(filePath, 'utf8');
        let original = content;

        // Replace CSS HSL values for the purple palette with the purple #276221 palette
        // 273 66% 32% was the primary purple. #276221 is ~ 114 50% 26%
        content = content.replace(/273 66% 32%/g, '114 50% 26%');
        content = content.replace(/273 66% 10%/g, '114 50% 10%');
        content = content.replace(/273 66% 20%/g, '114 50% 16%');
        content = content.replace(/273 66% 40%/g, '114 50% 34%');
        content = content.replace(/273 66% 25%/g, '114 50% 20%');

        // Replace hex codes (case insensitive)
        content = content.replace(/#581C87/gi, '#276221');
        content = content.replace(/#7E22CE/gi, '#276221');
        content = content.replace(/#F82C75/gi, '#276221');

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
        if (file === 'node_modules' || file === '.git' || file === 'dist' || file === '.gemini') continue;
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
