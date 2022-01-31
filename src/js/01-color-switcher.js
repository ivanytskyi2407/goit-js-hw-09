function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  startBtn: document.querySelector('button[data-start]'),
  endBtn: document.querySelector('button[data-stop]'),
};
let timerId = null;

refs.startBtn.addEventListener('click', changeBodyColorOn);
refs.endBtn.addEventListener('click', changeBodyColorOff);

function changeBodyColorOn() {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  this.setAttribute('disabled', true);
  refs.endBtn.removeAttribute('disabled', true);
}
function changeBodyColorOff() {
  clearInterval(timerId);
  refs.startBtn.removeAttribute('disabled', true);
  this.setAttribute('disabled', true);
}
