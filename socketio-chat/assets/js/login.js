import handleGetMessage, { handleGetDate } from "./chat";
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
    const text = `${nickname ? nickname : "User"}님이 들어왔습니다.`;
    return alertNotification(text);
  });

  socket.on("userLeft", ({ nickname }) => {
    if (nickname !== undefined) {
      const text = `${nickname ? nickname : "User"}님이 나갔습니다.`;
      return alertNotification(text);
    }
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
  handleGetDate();
};

const handleKeyUp = (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  const button = form.querySelector("button");
  const { value } = input;
  if (value.length >= 1) {
    button.style.backgroundColor = "#3B1C1C";
    button.style.color = "white";
    button.style.borderColor = "#3B1C1C";
    form.addEventListener("submit", handleFormSubmit);
  } else {
    button.style.backgroundColor = "#f6f6f6";
    button.style.color = "#D3D3D3";
    button.style.borderColor = "#f6f6f6";
    form.removeEventListener("submit", handleFormSubmit);
  }
};

if (form) {
  form.addEventListener("keyup", handleKeyUp);
}

if (lsNickname === null) {
  body.className = LOGOUT;
} else {
  body.className = LOGIN;
  login(lsNickname);
}
