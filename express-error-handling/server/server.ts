/* eslint-disable @typescript-eslint/no-unused-vars */
import 'dotenv/config';
import pg from 'pg';
import express from 'express';
import ClientError from './client-error.js';
import errorMiddleware from './error-middleware.js';

type Grade = {
  id: number;
  name: string;
  course: string;
  score: number;
};

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res) => {
  try {
    const sql = `
      select *
        from "grades"
    `;
    const result = await db.query<Grade>(sql);
    const grades = result.rows;
    res.json(grades);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.post('/api/grades', async (req, res) => {
  try {
    const { name, course } = req.body as Partial<Grade>;
    const score = Number(req.body.score);
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      res
        .status(400)
        .json({ error: 'score must be an integer between 0 and 100' });
      return;
    }
    if (!name || !course) {
      res
        .status(400)
        .json({ error: 'name, course, and score are required fields' });
      return;
    }
    const sql = `
      insert into "grades" ("name", "course", "score")
      values ($1, $2, $3)
      returning *
    `;
    const params = [name, course, score];
    const result = await db.query<Grade>(sql, params);
    const [newGrade] = result.rows;
    res.status(201).json(newGrade);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.get('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId < 1) {
      res.status(400).json({
        error: 'grade must be a positive integer',
      });
      return;
    }
    const sql = `
      select *
        from "grades"
      where "gradeId" = $1
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const [grade] = result.rows;
    if (!grade) {
      res
        .status(404)
        .json({ error: `cannot find grade with gradeId ${gradeId}` });
    } else {
      res.json(grade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.put('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId < 1) {
      res.status(400).json({ error: 'grade must be a positive integer' });
      return;
    }
    const { name, course } = req.body as Partial<Grade>;
    const score = Number(req.body.score);
    if (!Number.isInteger(score) || score < 0 || score > 100) {
      res
        .status(400)
        .json({ error: 'score must be an integer between 0 and 100' });
      return;
    }
    if (!name || !course) {
      res
        .status(400)
        .json({ error: 'name, course, and score are required fields' });
      return;
    }
    const sql = `
      update "grades"
        set "name"   = $1,
            "course" = $2,
            "score"  = $3
      where "gradeId" = $4
      returning *
    `;
    const params = [name, course, score, gradeId];
    const result = await db.query<Grade>(sql, params);
    const [updatedGrade] = result.rows;
    if (!updatedGrade) {
      res
        .status(404)
        .json({ error: `cannot find grade with gradeId ${gradeId}` });
    } else {
      res.json(updatedGrade);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.delete('/api/grades/:gradeId', async (req, res) => {
  try {
    const gradeId = Number(req.params.gradeId);
    if (!Number.isInteger(gradeId) || gradeId < 1) {
      res.status(400).json({ error: 'grade must be a positive integer' });
      return;
    }
    const sql = `
      delete from "grades"
      where "gradeId" = $1
      returning *
    `;
    const params = [gradeId];
    const result = await db.query<Grade>(sql, params);
    const [deletedGrade] = result.rows;
    if (!deletedGrade) {
      res
        .status(404)
        .json({ error: `cannot find grade with gradeId ${gradeId}` });
    } else {
      res.sendStatus(204);
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'an unexpected error occurred' });
  }
});

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
