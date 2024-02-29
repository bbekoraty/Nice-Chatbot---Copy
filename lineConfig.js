const line = require('@line/bot-sdk');
const createLineClient = () => {
    const config = {
        channelAccessToken: process.env.token,
        channelSecret: process.env.secretcode,
    };
  const client = new line.Client(config);
  
  return {
    config,
    client,
  };
};

module.exports = createLineClient;