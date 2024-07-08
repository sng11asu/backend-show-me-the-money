import axios from 'axios';
import {Request, Response} from 'express';
import {baseUrl} from '..';

const getData = async (req: Request, res: Response) => {
  try {
    const response = await axios.get(
      `${baseUrl}/api.xro/2.0/Reports/BalanceSheet`
    );
    res.json(response.data);
  } catch (error) {
    // console.error('Error calling the API:', error);
    res.status(500).send('Error calling the API');
  }
};

export default getData;
