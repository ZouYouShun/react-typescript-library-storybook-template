const fs = require('fs-extra');
const path = require('path');

const { writePackageJson } = require('./writePackageJson.plugin');

const rootPath = process.cwd();

const pkg = require(path.join(rootPath, 'package.json'));

console.log('[Release]: source move start');

const targetPath = 'dist';

const targetFolder = path.join(rootPath, targetPath);

// * put addition files that you want to release together.
const srcMovePaths = ['README.md', 'CHANGELOG.md'];

srcMovePaths.forEach((distMovePath) => {
  if (typeof distMovePath === 'string') {
    fs.copySync(
      path.join(rootPath, distMovePath),
      path.join(targetFolder, distMovePath),
    );
  } else {
    fs.copySync(
      path.join(rootPath, distMovePath.source),
      path.join(targetFolder, distMovePath.to),
    );
  }
});

writePackageJson(pkg, targetFolder).generateBundle();

console.log('[Release]: source move end');
