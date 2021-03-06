import fs from 'fs-extra';
import path from 'path';

export function getFolderTree(sourceUrl: string) {
  const returnObj: string[] = [];
  const files = fs.readdirSync(sourceUrl);
  files.forEach((file) => {
    const url = path.join(sourceUrl, file);
    if (fs.lstatSync(url).isDirectory()) {
      returnObj.push(...getFolderTree(url));
    } else {
      returnObj.push(url);
    }
  });
  return returnObj;
}
