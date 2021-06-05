const chatBox = document.getElementById("jsChatBox");
const chatForm = document.getElementById("jsChatForm");

const NICKNAME = "nickname";

const handleGetMessage = ({ message, nickname }) => {
  const lsNickname = localStorage.getItem(NICKNAME);
  const li = document.createElement("li");

  if (lsNickname !== nickname) {
    li.className = "li_opponent";
    li.innerHTML = `
      <div class="opponent_container">
        <div class="opponent_profile">
          <img src="/images/profile.jpeg" alt="profile"/>
        </div>
        <div class="opponent_info">
          <div class="opponent_nickname">
            ${nickname}
          </div>
          <div class="opponent_message">
            <span class="writer opponent">${message}</span>
            <em>
              ${new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}
            </em>
          </div>
        </div>
      </div>
    `;
  } else if (lsNickname === nickname) {
    li.className = "li_me";
    li.innerHTML = `
      <em>
        ${new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}
      </em>
      <span class="writer me">${message}</span>
    `;
  }
  chatBox.appendChild(li);
};

const handleChatForm = (event) => {
  event.preventDefault();
  const input = chatForm.querySelector("input");
  const { value: message } = input;
  // handleGetMessage({ message });

  if (message.length < 1) {
    return;
  }

  const lsNickname = localStorage.getItem(NICKNAME);
  io("/").emit("sendMessage", { message, nickname: lsNickname });
  input.value = "";
};

if (chatForm) {
  chatForm.querySelector("input").focus();
  chatForm.addEventListener("submit", handleChatForm);
}

export default handleGetMessage;
