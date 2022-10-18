import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';
import bodyParser from "body-parser";

//importing express
const app = express();
//this is my server port
const PORT = 8888;
//pg promise instance
const pgp = pgPromise({});

//porting over my database
//this is porting over my whole database 
const db = pgp('postgres://localhost:5432/bloglist');

app.use(cors());

app.get('/bloglist', async function (req, res, next){

    try{
      const bloglist = await db.any('SELECT * FROM bloglist', [true]);
      res.send(bloglist);
    } catch (e) {
      return res.status(400).json({e});
    }
});

app.get('/', (req, res) => {
  res.json("yeah, got that backend working, boiiiiii");
});

app.listen(PORT, () => console.log(`Yo! Ruthie, the server is running on port ${PORT}`));