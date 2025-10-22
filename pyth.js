import WebSocket from "ws";

const COIN = "SOL";
const MINT = "So11111111111111111111111111111111111111112";
const PYTH_ID =
  "ef0d8b6fda2ceba41da15d4095d1da392a0d2f8ed0c6c7bc0f4cfac8c280b56d";

const WS_URL = "wss://hermes.pyth.network/ws";
const ws = new WebSocket(WS_URL); //creates a new websocket connection to the pyth network

//when the websocket connection is opened
ws.onopen = () => {
  console.log("Connected to Pyth Websocket");
  //when the connection is opened, subscribe to price updates for the coin
  console.log(`Subscribing to ${COIN} price updates...`);
  ws.send(
    JSON.stringify({
      type: "subscribe",
      ids: [PYTH_ID],
    })
  );
  console.log(`Subscribed to ${COIN} price updates`);
};

ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log(data);
  
};
