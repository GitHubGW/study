const body = document.querySelector("body");
const chatBox = document.getElementById("jsChatBox");

// eslint-disable-next-line import/prefer-default-export
const alertNotification = (text) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  div.className = "notification";
  chatBox.appendChild(div);
};

export default alertNotification;

// setInterval(() => {
//   const hours = new Date().getHours();
//   const minutes = new Date().getMinutes();

//   console.log(hours, minutes);

//   return `${hours}:${minutes}`;
// }, 1000);
