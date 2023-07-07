import { writeFile, readFile } from 'node:fs/promises';

async function getJsonData() {
  try {
    const jsonData = JSON.parse(await readFile('./data.json'));
    for (const jsonProperty in jsonData.notes) {
      console.log(`${jsonProperty}: ${jsonData.notes[jsonProperty]}`);
    }
  } catch (error) {
    console.error('Error message', error.message);
  }
}
// User can add a note: giving the program a new note should append the note to
// the list of notes in the data.json file. Each new note will be given its own id.

async function addNote() {
  try {
    const jsonData = JSON.parse(await readFile('./data.json'));
    const jsonDataNotes = jsonData.notes;
    jsonDataNotes[jsonData.nextId] = process.argv[3];
    jsonData.nextId++;
    await writeFile('data.json', JSON.stringify(jsonData, null, 2));
  } catch (error) {
    console.error('Error message', error.message);
  }
}

// User can delete a note: the user should be able to ask the program to delete
// a note by its id.

async function removeNote() {
  try {
    const jsonData = JSON.parse(await readFile('./data.json'));
    const jsonDataNotes = jsonData.notes;
    delete jsonDataNotes[process.argv[3]];

    await writeFile('data.json', JSON.stringify(jsonData, null, 2));
  } catch (error) {
    console.error('Error message', error.message);
  }
}

// User can update a note: the user should be able to replace the content of an
// existing note given its id and the new content.

async function updateNote() {
  try {
    const jsonData = JSON.parse(await readFile('./data.json'));
    const jsonDataNotes = jsonData.notes;
    jsonDataNotes[process.argv[3]] = process.argv[4];

    await writeFile('data.json', JSON.stringify(jsonData, null, 2));
  } catch (error) {
    console.error('Error message', error.message);
  }
}

// to call in terminal
try {
  if (process.argv[2] === 'read') {
    await getJsonData();
  } else if (process.argv[2] === 'add') {
    await addNote();
  } else if (process.argv[2] === 'delete') {
    await removeNote();
  } else if (process.argv[2] === 'update') {
    await updateNote();
  }
} catch (error) {
  console.error('Error message', error.message);
}
