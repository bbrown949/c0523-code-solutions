import express from 'express';
import { writeFile, readFile } from 'node:fs/promises';
const app = express();

app.use(express.json());

app.get('/api/notes', async (req, res) => {
  const json = JSON.parse(await readFile('./data.json'));
  res.json(Object.values(json.notes));
});

app.get('/api/notes/:id', async (req, res) => {
  try {
    const json = JSON.parse(await readFile('./data.json'));
    if (json.notes[req.params.id]) {
      res.json(json.notes[req.params.id]);
    } else if (req.params.id < 0) {
      const x = {
        error: 'id must be a postive integer',
      };
      res.status(400).send(x);
    } else if (!json.notes[req.params.id]) {
      const x = {
        error: `cannot find note with id ${req.params.id}`,
      };
      res.status(404).send(x);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.post('/api/notes', async (req, res) => {
  try {
    const json = JSON.parse(await readFile('./data.json'));
    const keys = Object.keys(req.body);
    if (keys.includes('content')) {
      json.notes[json.nextId] = req.body;
      json.notes[json.nextId].id = json.nextId;
      json.nextId++;
      await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
      res.status(201).send(req.body);
    } else {
      const x = {
        error: 'content is a required field',
      };
      res.status(400).send(x);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.delete('/api/notes/:id', async (req, res) => {
  try {
    const json = JSON.parse(await readFile('./data.json'));
    if (json.notes[req.params.id]) {
      delete json.notes[req.params.id];
      await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
      res.sendStatus(204);
    } else if (req.params.id < 0) {
      const x = {
        error: 'id must be positive integer',
      };
      res.status(400).send(x);
    } else {
      const x = {
        error: `cannot find note with id ${req.params.id}`,
      };
      res.status(404).send(x);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.put('/api/notes/:id', async (req, res) => {
  try {
    const json = JSON.parse(await readFile('./data.json'));
    const keys = Object.keys(req.body);
    if (json.notes[req.params.id]) {
      json.notes[req.params.id] = req.body;
      json.notes[req.params.id].id = req.params.id;
      await writeFile('data.json', JSON.stringify(json, null, 2), 'utf8');
      res.status(200).send(req.body);
    } else if (req.params.id < 0 || !keys.includes('content')) {
      const x = {
        error: 'id must be a positive integer',
      };
      res.status(400).send(x);
    } else if (!json.notes[req.params.id]) {
      const x = {
        error: `cannot find note with id ${req.params.id}`,
      };
      res.status(404).send(x);
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});

app.listen(8080, () => {
  console.log('server listening on port 8080');
});
