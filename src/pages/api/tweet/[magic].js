import { Configuration, OpenAIApi } from 'openai'
import { openaiData } from '@/services/ia';

const configuration = new Configuration({apiKey: process.env.OPENAI_API_KEY,});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405)

  const { magic } = req.query
  try {
    const response = await openai.createCompletion(openaiData(magic));
    res.send({ tweet: response.data.choices[0].text });
  }
  catch (error) {
    res.status(503).send({ tweet:'Error, IA timeout or invalid category'});
  }
}
