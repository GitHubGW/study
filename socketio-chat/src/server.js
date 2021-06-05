import express from "express";
import morgan from "morgan";
import socketIO from "socket.io";
import { join } from "path";

const app = express();
const PORT = 4000;

app.set("view engine", "pug");
app.set("views", join(__dirname, "views"));
app.use(morgan("dev"));
app.use(express.static(join(__dirname, "static")));
app.get("/", (req, res) => {
  res.render("home", { title: "KakaoTalk" });
});

const handleListening = (rqe, res) => {
  console.log(`✅ http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("Socket.IO Connected");

  socket.on("setNickname", ({ nickname }) => {
    socket.nickname = nickname;
    socket.broadcast.emit("userJoin", { nickname });
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("userLeft", { nickname: socket.nickname });
  });

  socket.on("sendMessage", ({ message, nickname }) => {
    socket.broadcast.emit("getMessage", { message, nickname });
  });

  socket.on("deleteBtn", ({ deleteMessageId }) => {
    socket.broadcast.emit("deleteMessage", { deleteMessageId });
  });
});
