import { readFile } from 'node:fs/promises';

try {
  const text = await readFile('dijkstra.txt', 'utf8');
  console.log(text);
} catch (err) {
  console.error('Error reading file:', err);
}
