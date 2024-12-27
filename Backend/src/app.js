import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});


export { app }