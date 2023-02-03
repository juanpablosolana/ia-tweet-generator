// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cohere from 'cohere-ai'
import cohereData  from '@/services/ia'
cohere.init(process.env.COHERE_API_KEY); // This is your trial API key

export default function handler(req, res) {
  const { magic } = req.query
  const magicFormat = magic.replace(/-/g, ' ')
  async function makeTweet () {
    const response = await cohere.generate(cohereData(magicFormat));
    const { statusCode } = response;
    const { body } = response;
    if (statusCode !== 200) res.status(500).send('Timeout')
    res.send(body.generations[0].text);
  }
  makeTweet(magicFormat)
}

