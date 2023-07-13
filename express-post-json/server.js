import express from 'express';

const app = express();
app.use(express.json());

let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const json = [];
  for (const key in grades) {
    json.push(grades[key]);
  }
  res.json(json);
});

app.post('/api/grades', (req, res) => {
  const newEntry = req.body;
  newEntry.id = nextId;
  grades[nextId] = newEntry;
  nextId++;
  res.status(201).json(newEntry);
});

app.listen(8080, () => {
  console.log('Express listening on 8080.');
});
