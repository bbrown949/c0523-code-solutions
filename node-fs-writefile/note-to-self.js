import { writeFile } from 'node:fs/promises';

const noteToSelf = process.argv[2];

try {
  await writeFile('note.txt', noteToSelf + '\n', 'utf8');
} catch (error) {
  console.log('error message: ', error.message);
}
