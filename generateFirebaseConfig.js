const fs = require('fs');
const path = require('path');

require('dotenv').config();

const templatePath = path.resolve(__dirname, 'firebase.json');
const templateContent = fs.readFileSync(templatePath, { encoding: 'utf8' });

let configContent = templateContent
  .replace('${VUE_APP_PRIVATE_KEY_ID}', process.env.VUE_APP_PRIVATE_KEY_ID)
  .replace('${VUE_APP_PRIVATE_KEY}', process.env.VUE_APP_PRIVATE_KEY);

const outputPath = path.resolve(__dirname, 'firebase.json');
fs.writeFileSync(outputPath, configContent, { encoding: 'utf8' });

console.log('firebase.json has been generated successfully.');