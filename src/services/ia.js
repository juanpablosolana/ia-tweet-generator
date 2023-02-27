const createImage = (magic) => {
  return {
    prompt: `${magic} modern art`,
    n: 2,
    size: '256x256'
  }
}

const openaiData = (magic) => {
  return {
    model: 'text-davinci-003',
    prompt: `create a tweet about ${magic}`,
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  }
}

export { createImage, openaiData }
