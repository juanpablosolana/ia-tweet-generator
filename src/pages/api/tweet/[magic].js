import { Configuration, OpenAIApi } from 'openai'
import { openaiData } from '@/services/ia'

const configuration = new Configuration({ apiKey: process.env.OPENAI_API_KEY })
const openai = new OpenAIApi(configuration)

export default async function handler (req, res) {
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  // another common pattern
  // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method !== 'GET') return res.status(405).send({})

  const { magic } = req.query
  try {
    const response = await openai.createCompletion(openaiData(magic))
    res.send({ tweet: response.data.choices[0].text })
  } catch (error) {
    res.status(503).send({ tweet: 'Error, IA timeout or invalid category' })
  }
}
