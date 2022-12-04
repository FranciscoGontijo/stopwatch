const displayTens = document.querySelector('#tens');
const displaySeconds = document.querySelector('#seconds');
const lapTens = document.querySelector('#lap-tens');
const lapSeconds = document.querySelector('#lap-seconds');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const lapButton = document.querySelector('#lap-button');
const resetButton = document.querySelector('#reset-button');
let tens = 00;
let seconds = 00;
let timer;

const startTimer = () => {
    tens++;
    if (tens <= 9) {
        displayTens.innerHTML = '0' + tens;
    };
    if (tens > 9) {
        displayTens.innerHTML = tens;
    };
    if (tens > 99) {
        tens = 00;
        seconds++;
        displaySeconds.innerHTML = '0' + seconds;
    };
    if (seconds > 9) {
        displaySeconds.innerHTML = seconds;
    };
};

const stopFunction = () => {
    clearInterval(timer);
}

const startFunction = () => {
    clearInterval(timer);
    timer = setInterval(startTimer, 10);
};

const lapFunction = () => {
    if (tens <= 9) {
        lapTens.innerHTML = '0' + tens;
    };
    if (tens > 9) {
        lapTens.innerHTML = tens;
    };
    if (seconds <= 9) {
        lapSeconds.innerHTML = '0' + seconds;
    };
    if (seconds > 9) {
        lapSeconds.innerHTML = seconds;
    };
};

const resetFunction = () => {
    clearInterval(timer);
    tens = 00;
    seconds = 00;
    displayTens.innerHTML = '0' + tens;
    displaySeconds.innerHTML = '0' + seconds;
    lapTens.innerHTML = '0' + tens;
    lapSeconds.innerHTML = '0' + seconds;
};

startButton.addEventListener('click', startFunction);
stopButton.addEventListener('click', stopFunction);
lapButton.addEventListener('click', lapFunction);
resetButton.addEventListener('click', resetFunction);
