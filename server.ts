import { WebSocketServer } from "ws";

const port = 12121;
const wsServer = new WebSocketServer({ port });

console.log(`websocket server listening at ${port}`);
const activeClients = {};

wsServer.on("connection", (wsClient) => {
  wsClient.on("message", (data) => {
    console.log(`received ${data}`);
  });

  wsClient.send(`Hello from server`);
});
