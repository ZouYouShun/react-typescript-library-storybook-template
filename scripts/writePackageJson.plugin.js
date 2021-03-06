const { writeFileSync } = require('fs');
const path = require('path');

const writePackageJson = (pkg, targetPath) => {
  return {
    generateBundle() {
      const output = {
        name: pkg.name,
        version: pkg.version,
        main: pkg.main,
        module: pkg.module,
        // browser: pkg.browser,
        author: pkg.author,
        license: pkg.license,
        typings: pkg.typings,
        dependencies: {
          ...pkg.dependencies,
        },
        peerDependencies: pkg.peerDependencies,
        sideEffects: false,
      };
      writeFileSync(
        path.join(targetPath, 'package.json'),
        JSON.stringify(output, null, 2),
      );
    },
  };
};

module.exports = { writePackageJson };
