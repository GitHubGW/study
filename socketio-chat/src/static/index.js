// eslint-disable-next-line no-undef
const socket = io("/");

socket.on("sendMessage", ({ message }) => {
  console.log(message);
});
