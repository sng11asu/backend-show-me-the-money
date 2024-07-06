import axios from 'axios';
import express, {Application, Request, Response} from 'express';

const baseUrl = 'localhost:3000';
const app: Application = express();
const port = 3100;

app.get('/', async (req: Request, res: Response) => {
  const response = await axios.get(
    'http://127.0.0.1:3000//api.xro/2.0/Reports/BalanceSheet'
  );
  console.log('HERE', response);
  res.json(response.data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
