// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import cohere from 'cohere-ai'
cohere.init(process.env.COHERE_API_KEY); // This is your trial API key

export default function handler(req, res) {
  const { magic } = req.query
    async function makeTweet (magic){
    const response = await cohere.generate({
      model: 'command-xlarge-nightly',
      prompt: `Write a tweet no more 250 characters about ${magic}`,
      max_tokens: 300,
      temperature: 0.9,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihoods: 'NONE'
    });
    res.send(response.body.generations[0].text);
  }
  makeTweet(magic)

}
