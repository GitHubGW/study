import { alertNotification } from "./notification";

const body = document.querySelector("body");
const form = document.getElementById("jsForm");

let isLogin = false;
const NICKNAME = "nickname";

const lsNickname = localStorage.getItem(NICKNAME);

const login = (nickname) => {
  const socket = io("/");
  socket.emit("setNickname", { nickname });

  socket.on("newUser", ({ nickname }) => {
    const text = `${nickname} just joined`;
    const color = "dodgerblue";
    return alertNotification(text, color);
  });
};

const handleFormSubmit = (event) => {
  event.preventDefault();
  const input = form.querySelector("input");
  localStorage.setItem(NICKNAME, input.value);
  isLogin = true;
  login(input.value);
  input.value = "";
};

if (form) {
  form.addEventListener("submit", handleFormSubmit);
}

if (lsNickname === null) {
  isLogin = false;
} else {
  isLogin = true;
  login(lsNickname);
}
