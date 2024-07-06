import axios from 'axios';
import express, {Application, Request, Response} from 'express';
import router from './routes/routes';

export const baseUrl = 'http://127.0.0.1:3000/';
const app: Application = express();
const port = 3100;

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
