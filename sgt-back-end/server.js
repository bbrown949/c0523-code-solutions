import express from 'express';
import pg from 'pg';

const app = express();

app.use(express.json());

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

// GET /api/grades returns all rows from the "grades" table. The client should
// receive an array of objects. If there happens to be no rows, an empty array is ok.

// The result could be a 200 or a 500.

// 200 because the query may succeed
// 500 because the query may fail

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
    select *
      from "grades"
    `;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

// POST /api/grades inserts a new grade into the "grades" table and returns
// the created grade. The client should receive an object, not an array.
// The result could be a 201, 400, or 500.

// 201 because the grade was successfully inserted
// 400 because the client may supply an invalid grade, including a missing name, course, or score. Or the score isn't an integer from 0 to 100
// 500 or the query may fail

app.post('/api/grades', async (req, res) => {
  try {
    if (
      !req.body.name ||
      !req.body.course ||
      !req.body.score ||
      req.body.score < 0 ||
      req.body.score > 100
    ) {
      res.status(400).json({
        error:
          'missing name, course, or score, score must be a positive integer between 0-100',
      });
      return;
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
        values ($1, $2, $3)
      returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score];
    const result = await db.query(sql, params);
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

// PUT /api/grades/:gradeId updates a grade in the "grades" table and returns
// the updated grade. The client should receive an object, not an array.
// Your code should require that the client includes the name, course, and score in the request body.

// The result could be a 200, 400, 404, or 500.

// 200 because the grade may be successfully updated,
// 400 because the client may supply an invalid gradeId or invalid/missing name, course, or score
// 404 because the target grade may not exist in the database
// 500 or there may be an error querying the database

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (
      !req.body.name ||
      !req.body.course ||
      !req.body.score ||
      gradeId < 0 ||
      !Number.isInteger(gradeId)
    ) {
      res.status(400).json({
        error:
          'missing name, course, or score, score must be a positive integer between 0-100, must have valid gradeId',
      });
      return;
    }
    const sql = `
      update "grades"
        set "name" = $1,
          "course" = $2,
          "score" = $3
        where "gradeId" = $4
        returning *
    `;
    const params = [req.body.name, req.body.course, req.body.score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      res
        .status(404)
        .json({ error: ` Grade ID ${gradeId} may not exist in the database` });
    } else {
      res.status(200).json(updatedGrade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

// DELETE /api/grades/:gradeId deletes a grade from the "grades" table.

// The result could be a 204, 400, 404, or 500.

// 204 because the grade may be successfully deleted
// 400 because the client may supply an invalid gradeId
// 404 because the target grade may not exist in the database
// 500 or there may be an error querying the database.

app.delete('/api/grades/:gradeId', async (req, res) => {
  const gradeId = Number(req.params.gradeId);
  try {
    if (!gradeId) {
      res.status(400).json({ error: 'invalid grade ID' });
    }
    const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *;
  `;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deletedGrade = result.rows[0];
    if (!deletedGrade) {
      res.status(404).json({ error: 'target grade may not exist' });
    } else {
      res.status(204).json(deletedGrade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occured' });
  }
});

app.listen(8080, () => {
  console.log('server listening on 8080');
});
