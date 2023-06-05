const express = require("express");
const app = express();
const cors = require("cors");
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use(cors());
app.use(express.json());

const messages = {
  message: "Hello from the other side",
};

app.get("/message", (req, res) => {
  res.send(messages.message);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    io.emit("chat message", msg);
  });
});

app.listen(3000, () => {
  console.log("listening on port:3000");
});
