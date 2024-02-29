function mqtts() {
  const mqtt = require("mqtt");
  const fs = require("fs");
  const line_send_data = require("../LineSendData.js");
  const createCarousel = require("../carouselMAKE.js");
  const { connectOptions } = require("./use_mqtts.js");
  const { formToJSON } = require("axios");
  const Alert_Flex = require("../UserAlert/Alert_flex.js");
  const Cover_Flex = require("../UserAlert/CoverFlex.js");

  const clientId =
    "mqttx_9e420e8e" + Math.random().toString(16).substring(2, 8);

  const options = {
    clientId,
    clean: true,
    connectTimeout: 4000,
    username: "Nice01",
    password: "Nice2546",
    reconnectPeriod: 1000,
    rejectUnauthorized: true,
  };

  const { protocol, host, port } = connectOptions;
  let connectUrl = `${protocol}://${host}:${port}`;
  if (["ws", "wss"].includes(protocol)) {
    connectUrl += "/mqtt";
  }
  if (
    ["mqtts", "wss"].includes(protocol) &&
    fs.existsSync("broker.emqx.io-ca.crt")
  ) {
    options["ca"] = fs.readFileSync("broker.emqx.io-ca.crt");
  }

  const client = mqtt.connect(connectUrl, options);
  const topic = "test/cloud";
  const qos = 0;
  client.on("connect", () => {
    console.log(`${protocol}: Connected`);
    client.subscribe(topic, { qos }, (error) => {
      if (error) {
        console.log("subscribe error:", error);
        return;
      }
      console.log(`${protocol}: Subscribe to topic '${topic}'`);
    });
  });
  client.on("reconnect", (error) => {
    console.log(`Reconnecting(${protocol}):`, error);
  });
  client.on("error", (error) => {
    console.log(`Cannot connect(${protocol}):`, error);
  });

  client.on("message", (topic, payload) => {
    console.log("Received Message:", topic, payload.toString());

    let dataString = payload.toString();
    let dataArray = dataString.split(", ");

    // dataArray ["Name: Ohm", "UID: 20A04189", "Building: A3"]

    let name = dataArray[0].substring(6);
    let uid = dataArray[1].substring(5);
    let building = dataArray[2].substring(10);
    let data1 = createCarousel();

    const result_cover = Cover_Flex();
    const result_alert = Alert_Flex(name, uid, building);

    // data1[0].contents.contents.push(result_cover);
    data1[0].contents.contents.push(result_alert);

    // data1.contents.contents.push(Cover_flex());
    // Alert_flex(name, uid, building));

    console.log("Name:", name);
    console.log("UID:", uid);
    console.log("Building:", building);

    // const carousel = createCarousel(result_cover, result_alert);
    const userId = "Ubf11c3175d7ef1e0f5171451b1f0191d";

    // const carousel = createCarousel(result_cover, result_alert);
    // client.pushMessage('U9e0feeee534ab65aea63a6d5ee6c731a', carousel);

    // console.log(carousel);
    // console.log(JSON.stringify(carousel, null, 2));

    line_send_data(data1, userId);
  });
}
module.exports = mqtts;
