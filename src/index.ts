import express, {Application, Request, Response} from 'express';
import router from './routes/routes';
import cors from 'cors';

export const baseUrl = 'http://127.0.0.1:3000/';
export const app: Application = express();
const port = 3100;
const corsOptions = {
  origin: 'http://localhost:5173',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));

app.use('/api', router);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
