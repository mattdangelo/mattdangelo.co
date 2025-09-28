import axios from 'axios';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  try {
    const { data } = await axios.get('https://zenquotes.io/api/random');
    res.status(200).json({ quote: `${data[0].q}` });
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch quote' });
  }
}
