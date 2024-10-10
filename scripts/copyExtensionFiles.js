const fs = require('fs');
const path = require('path');

const files = ['manifest.json', 'background.js'];
const sourceDir = path.join(__dirname, '..', 'public');
const targetDir = path.join(__dirname, '..', 'build');

files.forEach(file => {
  fs.copyFileSync(path.join(sourceDir, file), path.join(targetDir, file));
  console.log(`Copied ${file} to build directory`);
});
