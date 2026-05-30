var timer = 60;
var score = 0;
var hitrn;

function scoreInc() {
  score += 10;
  document.querySelector("#score").textContent = score;
}

function bubble() {
  var clutter = "";

  for (var i = 0; i <= 113; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

function hit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hit").textContent = hitrn;
}

function time() {
  var timerInterval = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timer").textContent = timer;
    } else {
      clearInterval(timerInterval);
      document.querySelector("#pbtm").innerHTML =
        `<h1 style="color:rgb(95, 97, 50)">Game Over</h1><br><h1 style="color:rgb(95, 97, 50)">Your Score: ${score}</h1>`;
    }
  }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function (details) {
  var clknmbr = Number(details.target.textContent);
  if (clknmbr === hitrn) {
    scoreInc();
    hit();
    bubble();
  }
});

bubble();
time();
hit();
