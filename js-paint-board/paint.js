let checkPainting = false;

const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".control__color");
const range = document.getElementById("jsInputRange");
const fill = document.getElementById("jsFill");
const reset = document.getElementById("jsReset");
const save = document.getElementById("jsSave");

canvas.width = 1200;
canvas.height = 1100;

ctx.strokeStyle = "black";
ctx.lineWidth = "4";

ctx.fillStyle = "white";
ctx.fillRect(0, 0, canvas.width, canvas.height);

const handleMouseMove = (event) => {
  const { offsetX, offsetY } = event;

  if (!checkPainting) {
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  } else {
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  }
};

const handleMouseLeave = (event) => {
  const { offsetX, offsetY } = event;
  checkPainting = false;
};

const handleMouseDown = (event) => {
  const { offsetX, offsetY } = event;
  checkPainting = true;
};

const handleMouseUp = (event) => {
  const { offsetX, offsetY } = event;
  checkPainting = false;
};

const handleRightClick = (event) => {
  event.preventDefault();
};

const handleColorClick = (event) => {
  const currentColor = document.getElementById("jsCurrentColor");
  const {
    target: {
      style: { backgroundColor },
    },
  } = event;
  currentColor.style.backgroundColor = backgroundColor;
  ctx.strokeStyle = backgroundColor;
};

const handleInput = (event) => {
  const {
    target: { value },
  } = event;
  ctx.lineWidth = value;
};

const handleFillClick = () => {
  ctx.fillStyle = ctx.strokeStyle;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const handleResetClick = () => {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
};

const handleSaveClick = () => {
  const canvasDataURL = canvas.toDataURL("image/png");
  const aTag = document.createElement("a");

  aTag.href = canvasDataURL;
  aTag.download = "🎨";
  aTag.click();
};

if (canvas) {
  canvas.addEventListener("mousemove", handleMouseMove);
  canvas.addEventListener("mouseleave", handleMouseLeave);
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("contextmenu", handleRightClick);
}

if (colors) {
  const colorArray = Array.from(colors);
  colorArray.map((color) => {
    color.addEventListener("click", handleColorClick);
  });
}

if (range) {
  range.addEventListener("input", handleInput);
}

if (fill) {
  fill.addEventListener("click", handleFillClick);
}

if (reset) {
  reset.addEventListener("click", handleResetClick);
}

if (save) {
  save.addEventListener("click", handleSaveClick);
}
