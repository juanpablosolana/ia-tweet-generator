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

const openaiData = (magic) => {
  return {
    model: "text-davinci-003",
    prompt: `create a tweet about ${magic}`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0,
  }
};

export { cohereData, openaiData }
