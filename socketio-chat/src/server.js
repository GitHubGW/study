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
  res.render("home", { title: "Home" });
});

const handleListening = (rqe, res) => {
  console.log(`✅ http://localhost:${PORT}`);
};

const server = app.listen(PORT, handleListening);
const io = socketIO(server);

io.on("connection", (socket) => {
  console.log("Socket.IO Connected");
  // socket.emit("sendMessage", { message: "Hello" });
});
