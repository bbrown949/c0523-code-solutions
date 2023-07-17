import { readFile } from 'node:fs/promises';

const [, , ...files] = process.argv;
const promises = files.map((files) => readFile(files, 'utf8'));
try {
  const contents = await Promise.all(promises);
  console.log(contents.join('\n'));
} catch (error) {
  console.error(error.message);
}
