const createTweet = async (category) => {
  const response = await fetch(`/api/${category}`);
  const { tweet: message } = await response.json();
  return message;
}

export default createTweet;