import { writeFile, readFile } from 'node:fs/promises';

const firstFile = process.argv[2];
const secondFile = process.argv[3];

try {
  const fileCopy = await readFile(firstFile);
  await writeFile(secondFile, fileCopy);
} catch (error) {
  console.log('error message: ', error.message);
}
