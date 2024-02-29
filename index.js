const express = require("express");
const axios = require("axios");
const app = express();
require("dotenv").config();
const line = require("@line/bot-sdk");
const mqtts_line = require("./mqtts/mqtts");

const groupID = "C0afe567f2d33625dbd3be9381bc67cff";

const createLineClient = require("./lineConfig");
const { config, client } = createLineClient();

// app.use(express.static("C:\\Drone_AI\\NICED"));

app.post("/webhook", line.middleware(config), (req, res) => {
  Promise.all([req.body.events.map(handleEvents)]).then((result) =>
    res.json(result)
  );
});

async function handleEvents(event) {
  console.log(event);
}

mqtts_line();
// client.pushMessage(groupID, messages);

app.get("/test", (req, res) => {
  res.send("EIEI");
});
//////END HANDLE event///////
app.get("/", (req, res) => {
  res.send("ok");
});
app.listen(5000, () => console.log("start server on port 5000"));
