const fs = require('fs');
const path = require('path');

// Get the project name from the command-line arguments
const projectName = process.argv[2];

if (!projectName) {
  console.error('Please provide a project name.');
  process.exit(1);
}

// Create the project folder
const projectPath = path.join(process.cwd(), projectName);
fs.mkdirSync(projectPath);