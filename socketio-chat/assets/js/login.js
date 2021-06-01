import handleGetMessage from "./chat";
import alertNotification from "./notification";

const body = document.querySelector("body");
const form = document.getElementById("jsForm");

const NICKNAME = "nickname";
const LOGIN = "login";
const LOGOUT = "logout";

const lsNickname = localStorage.getItem(NICKNAME);

const login = (nickname) => {
  const socket = io("/");
  socket.emit("setNickname", { nickname });

  socket.on("userJoin", ({ nickname }) => {
    const text = `${nickname} just joined`;
    const color = "dodgerblue";
    return alertNotification(text, color);
  });

  socket.on("userLeft", ({ nickname }) => {
    const text = `${nickname} just lefted`;
    const color = "orange";
    return alertNotification(text, color);
  });

  socket.on("getMessage", handleGetMessage);
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  localStorage.setItem(NICKNAME, input.value);
  body.className = LOGIN;
  login(input.value);
  input.value = "";
};

if (form) {
  form.addEventListener("submit", handleFormSubmit);
}

if (lsNickname === null) {
  body.className = LOGOUT;
} else {
  body.className = LOGIN;
  login(lsNickname);
}
