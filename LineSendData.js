const axios = require("axios");
require("dotenv").config();
async function sendFlexMessage(mes, UID) {
  try {
    let data = JSON.stringify({
      to: UID,
      messages: mes,
    });
    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://api.line.me/v2/bot/message/push",
      headers: {
        Authorization: "Bearer " + process.env.token,
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios(config);
    console.log("Message sent successfully:", response.data);
  } catch (error) {
    console.error("Error sending message:", error.message);
  }
}

// Call the function to send the Flex Message
module.exports = sendFlexMessage;
