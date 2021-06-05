const chatBox = document.getElementById("jsChatBox");
const chatForm = document.getElementById("jsChatForm");
const time = document.querySelector(".chatHeader_second");

const NICKNAME = "nickname";

export const handleGetDate = () => {
  const dayArray = ["일", "월", "화", "수", "목", "금", "토"];

  const year = new Date().getFullYear();
  const month = Number(new Date().getMonth()) + 1;
  const date = new Date().getDate();
  const dayOfWeek = new Date().getDay();
  const day = dayArray[dayOfWeek];

  const div = document.createElement("div");
  div.className = "date_container";
  div.innerHTML = `${year}년 ${month}월 ${date}일 ${day}요일`;
  chatBox.appendChild(div);
};

const handleDeleteBtn = (event) => {
  const {
    target: {
      parentNode: { id },
    },
  } = event;

  io("/").emit("deleteBtn", { deleteMessageId: id });
};

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
    li.id = new Date().getTime();
    li.innerHTML = `
      <em>
        ${new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}
      </em>
      <span class="writer me">${message}</span>
      <button class="deleteBtn">Delete</button>
    `;
  }
  chatBox.appendChild(li);

  const deleteBtn = document.querySelector(".deleteBtn");
  deleteBtn.addEventListener("click", handleDeleteBtn);
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
  const input = chatForm.querySelector("input");
  input.focus();
  const button = chatForm.querySelector("button");

  chatForm.addEventListener("keyup", (event) => {
    if (input.value.length >= 1) {
      button.style.color = "black";
      chatForm.addEventListener("submit", handleChatForm);
    } else {
      button.style.color = "#C0C0C0";
    }
  });

  setInterval(() => {
    time.innerHTML = `${new Date().getHours() < 10 ? `0${new Date().getHours()}` : new Date().getHours()}:${new Date().getMinutes() < 10 ? `0${new Date().getMinutes()}` : new Date().getMinutes()}`;
  }, 1000);
}

export default handleGetMessage;
