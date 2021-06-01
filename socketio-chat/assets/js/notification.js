const body = document.querySelector("body");

// eslint-disable-next-line import/prefer-default-export
export const alertNotification = (text, color) => {
  const div = document.createElement("div");
  div.innerHTML = text;
  div.style.backgroundColor = color;
  div.className = "notification";
  body.appendChild(div);
};
