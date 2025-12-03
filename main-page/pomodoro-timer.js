const wrapper = document.querySelector(".wrapper");
document.querySelector('#Timer').addEventListener('click', () => {
    console.log('Timer button clicked');
    const wrapper = document.querySelector(".wrapper");
    if (window.innerWidth <= 768) {
        wrapper.classList.remove('side-panel-open-1');
        wrapper.classList.remove('side-panel-open-2');
    }
    wrapper.classList.toggle('side-panel-open-3');
});


const timerEl = document.getElementById("timer");
const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

let interval;
let timeLeft = 1500;

function updateTimer() {
    let minutes = Math.floor(timeLeft / 60);
    let seconds = timeLeft % 60;

    let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
    let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;

    timerEl.innerHTML = `${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    clearInterval(interval);

    interval = setInterval(() => {
        timeLeft--;
        updateTimer();

        if (timeLeft === 0) {
            clearInterval(interval);
            alert("Time's up!");
            timeLeft = 1500;
            updateTimer();
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(interval);
}

function resetTimer() {
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}

startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);