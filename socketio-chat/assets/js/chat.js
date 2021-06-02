const chatBox = document.getElementById("jsChatBox");
const chatForm = document.getElementById("jsChatForm");

const NICKNAME = "nickname";

const handleGetMessage = ({ message, nickname }) => {
  const lsNickname = localStorage.getItem(NICKNAME);
  if (lsNickname !== nickname) {
    const li = document.createElement("li");
    li.innerHTML = `<span class="writer ${nickname ? "opponent" : "me"}">${
      nickname ? nickname : "You"
    }: ${message}</span>`;
    chatBox.appendChild(li);
  }
};

const handleChatForm = (event) => {
  event.preventDefault();
  const input = chatForm.querySelector("input");
  const { value: message } = input;
  handleGetMessage({ message });

  const lsNickname = localStorage.getItem(NICKNAME);
  io("/").emit("sendMessage", { message, nickname: lsNickname });
  input.value = "";
};

if (chatForm) {
  chatForm.addEventListener("submit", handleChatForm);
}

export default handleGetMessage;
