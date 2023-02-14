import { Configuration, OpenAIApi } from 'openai'
import { createImage } from '@/services/ia';

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).send({})

  const { magic } = req.query
  try {
    const response = await openai.createImage(createImage(magic));
    res.send({ tweet: response.data.data[0].url });
  }
  catch (error) {
    res.status(503).send({ tweet:'Error, IA timeout or invalid category'});
  }
}
