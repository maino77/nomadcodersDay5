import "./styles.css";

let time = document.querySelector("h2");
let leftTime = document.querySelector("h1");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  const today = new Date();
  const gap = xmasDay - today;
  const d = Math.floor(gap / (1000 * 60 * 60 * 24)); //Day
  const h = Math.floor((gap / (1000 * 60 * 60)) % 24); // hour
  const m = Math.floor(((gap / 1000) * 60) % 60); // minute
  const s = Math.floor((gap / 1000) % 60); // second
  if (gap <= 0) {
    leftTime.innerText = "Hello, I'm Santa Claus~!";
    time.innerText = "Merry Christmas!!";
  } else {
    time.innerText = `D - ${d}일 ${h}시간 ${m}분 ${s}초`;
  }
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();
