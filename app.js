let timer;
let totalSeconds;

function startTimer() {
  const minutes = parseInt(prompt("Iltimos minute kiriting"));
  if (!isNaN(minutes)) {
    totalSeconds = minutes * 60;
    timer = setInterval(updateTimer, 1000);
  } else {
    alert("Xato! Iltimos minute kiriting");
  }
}

function updateTimer() {
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  const formattedTime = pad(minutes) + ':' + pad(seconds);
  document.getElementById('timer').innerText = formattedTime;

  if (totalSeconds === 0) {
    clearInterval(timer);
    alert("Vaqt tugadi!");
  } else {
    totalSeconds--;
  }
}
function pauseTimer() {
  clearInterval(timer);
}
function pad(num) {
  return (num < 10 ? '0' : '') + num;
}
