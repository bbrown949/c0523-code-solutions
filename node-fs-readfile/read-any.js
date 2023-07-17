import { readFile } from 'node:fs/promises';

const arg = process.argv[2];

async function readAny(fileName) {
  try {
    const file = await readFile(fileName, 'utf-8');
    await console.log(file);
  } catch (error) {
    console.log(error);
  }
}

readAny(arg);
