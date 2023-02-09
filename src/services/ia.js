const cohereData = (magic) => {
  return {
    model: 'command-xlarge-nightly',
    prompt: `create a tweet about ${magic}`,
    max_tokens: 300,
    temperature: 0.9,
    k: 0,
    p: 0.75,
    frequency_penalty: 0,
    presence_penalty: 0,
    stop_sequences: [],
    return_likelihoods: 'NONE'
  }
};

export default cohereData