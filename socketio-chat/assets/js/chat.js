const chatBox = document.getElementById("jsChatBox");
const chatForm = document.getElementById("jsChatForm");

const handleGetMessage = ({ message, nickname }) => {
  console.log(message, nickname);
  const li = document.createElement("li");
  li.innerHTML = `${nickname}: ${message}`;
  chatBox.appendChild(li);
};

const handleChatForm = (event) => {
  event.preventDefault();
  const input = chatForm.querySelector("input");
  const { value } = input;
  io("/").emit("sendMessage", { message: value });
  input.value = "";
};

if (chatForm) {
  chatForm.addEventListener("submit", handleChatForm);
}

export default handleGetMessage;
