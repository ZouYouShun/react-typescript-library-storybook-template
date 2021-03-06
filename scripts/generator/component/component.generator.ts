import fs from 'fs';
import path from 'path';

import { Lib } from '../../utils';

type TypeValue = 'function' | 'class';

const replaceFrag = '__name__';
const replacePrefixFrag = '__prefix__';

const prefixSymbol = '--prefix=';

export class ComponentGenerator {
  componentType: TypeValue = 'function';

  prefix = 'UI';

  constructor(private url: string, private args: string[]) {
    this.args.forEach((arg) => {
      if (arg.includes(prefixSymbol)) {
        this.prefix = arg.replace(prefixSymbol, '');
      }
    });
  }

  async createFile() {
    const target = Lib.camelize(this.url);

    const rootPath = path.join(__dirname, 'Function');

    const filePaths = Lib.getFileTree(rootPath);

    for (const filePath of filePaths) {
      const content = fs.readFileSync(filePath).toString();

      const result = content
        .replace(new RegExp(`${replaceFrag}`, 'g'), target)
        .replace(new RegExp(`${replacePrefixFrag}`, 'g'), this.prefix);

      const targetUrl = path
        .join(
          Lib.getCMDUrl(),
          'src/components',
          target,
          filePath.replace(rootPath, ''),
        )
        .replace(`${replaceFrag}`, target);

      Lib.makeDirExit(path.dirname(targetUrl));

      await Lib.writeFile(targetUrl, result);
    }
  }
}
