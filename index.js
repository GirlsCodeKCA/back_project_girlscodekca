import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import conectarBD from './db/db.js';

dotenv.config();

const app = express();

app.use(express.json());

app.use(cors());

app.listen({ port: process.env.PORT || 4000 }, async () => {
  await conectarBD();
  
});