// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cohere from 'cohere-ai'
import cohereData  from '@/services/ia'
cohere.init(process.env.COHERE_API_KEY); // This is your trial API key

export default function handler(req, res) {
  const { magic } = req.query
  const magicFormat = magic.replace(/-/g, ' ')
  async function makeTweet() {
    try {
      const response = await cohere.generate(cohereData(magicFormat));
      const { body } = response;
      res.send(body.generations[0].text);
    }
    catch (error) {
      res.status(500).send('Timeout', error);
    }
  }
  makeTweet(magicFormat)
}

