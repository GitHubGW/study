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

export const handleDeleteMessage = ({ deleteMessageId }) => {
  // console.log("handleDeleteMessage", deleteMessageId);

  const deleteLi = document.getElementById(deleteMessageId);
  const deleteLi2 = document.getElementById(Number(deleteMessageId) + 1);
  const deleteLi3 = document.getElementById(Number(deleteMessageId) - 1);
  const deleteLi4 = document.getElementById(Number(deleteMessageId) + 2);
  const deleteLi5 = document.getElementById(Number(deleteMessageId) - 2);
  const deleteLi6 = document.getElementById(Number(deleteMessageId) + 3);
  const deleteLi7 = document.getElementById(Number(deleteMessageId) - 3);

  console.log(deleteLi, deleteLi2, deleteLi3, deleteLi4, deleteLi5);

  if (deleteLi) {
    const deleteSpan = deleteLi.querySelector("span");
    deleteSpan.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan.style.color = "#A9A9A9";
  } else if (deleteLi2) {
    const deleteSpan2 = deleteLi2.querySelector("span");
    deleteSpan2.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan2.style.color = "#A9A9A9";
  } else if (deleteLi3) {
    const deleteSpan3 = deleteLi3.querySelector("span");
    deleteSpan3.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan3.style.color = "#A9A9A9";
  } else if (deleteLi4) {
    const deleteSpan4 = deleteLi4.querySelector("span");
    deleteSpan4.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan4.style.color = "#A9A9A9";
  } else if (deleteLi5) {
    const deleteSpan5 = deleteLi5.querySelector("span");
    deleteSpan5.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan5.style.color = "#A9A9A9";
  } else if (deleteLi6) {
    const deleteSpan6 = deleteLi6.querySelector("span");
    deleteSpan6.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan6.style.color = "#A9A9A9";
  } else if (deleteLi7) {
    const deleteSpan7 = deleteLi7.querySelector("span");
    deleteSpan7.innerHTML = `<i class="fas fa-exclamation-circle"></i> 삭제된 메세지입니다.`;
    deleteSpan7.style.color = "#A9A9A9";
  }

  // chatBox.removeChild(deleteLi);
};

const handleDeleteBtn = (event) => {
  const {
    target: {
      parentNode: {
        parentNode: { id },
      },
    },
  } = event;

  io("/").emit("deleteBtn", { deleteMessageId: id });
};

export const handleGetMessage = ({ message, nickname }) => {
  const lsNickname = localStorage.getItem(NICKNAME);
  const li = document.createElement("li");

  if (lsNickname !== nickname) {
    li.className = "li_opponent";
    li.id = new Date().getTime();
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
      <button class="deleteBtn"><i class="fas fa-times-circle"></i></button>
    `;
  }
  chatBox.appendChild(li);
  const allDeleteBtn = document.querySelectorAll(".deleteBtn");
  allDeleteBtn.forEach((deleteBtn) => {
    deleteBtn.addEventListener("click", handleDeleteBtn);
  });
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
