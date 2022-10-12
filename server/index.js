import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 8888;

app.use(cors());

app.get('/', (req, res) => {
  res.json("yeah, got that backend working, boiiiiii");
});


app.listen(PORT, () => console.log(`Yo! Ruthie, the server is running on port ${PORT}`));