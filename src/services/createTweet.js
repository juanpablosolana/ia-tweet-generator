const createTweet = async (aiProvider,category) => {
  const response = await fetch(`/api/${aiProvider}/${category}`);
  const { tweet: message } = await response.json();
  return message;
}

export default createTweet;