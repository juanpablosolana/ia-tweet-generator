// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cohere from 'cohere-ai'
import cohereData  from '@/services/ia'
cohere.init(process.env.COHERE_API_KEY); // This is your trial API key

export default function handler(req, res) {
  const { magic } = req.query
  async function makeTweet() {
    try {
      const response = await cohere.generate(cohereData(magic));
      const { body } = response;
      res.send({tweet:body.generations[0].text});
    }
    catch (error) {
      res.status(503).send({ tweet:'Error, IA timeout or invalid category'});
    }
  }
  makeTweet(magic)
}

