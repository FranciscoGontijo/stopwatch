const displayTens = document.querySelector('#tens');
const displaySeconds = document.querySelector('#seconds');
const lapTens = document.querySelector('#lap-tens');
const lapSeconds = document.querySelector('#lap-seconds');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const lapButton = document.querySelector('#lap-button');
const resetButton = document.querySelector('#reset-button');
const lapSection = document.querySelector(".lap-section");

let totalTens = 0;
let lapFunctionTens = 0;
let lapFunctionSeconds = 0;
let timerTens = 00;
let timerSeconds = 00;
let timer;
let lapCount = 0;

const startTimer = () => {
    timerTens++;
    totalTens++;
    if (timerTens <= 9) {
        displayTens.innerHTML = '0' + timerTens;
    };
    if (timerTens > 9) {
        displayTens.innerHTML = timerTens;
    };
    if (timerTens > 99) {
        timerTens = 00;
        timerSeconds++;
        displaySeconds.innerHTML = '0' + timerSeconds;
    };
    if (seconds > 9) {
        displaySeconds.innerHTML = timerSeconds;
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
    lapCount++;
    lapFunctionSeconds = Math.floor(totalTens / 100);
    lapFunctionTens = totalTens - (lapFunctionSeconds * 100);
    const lapElement = document.createElement("p");
    lapSection.append(lapElement);
    if (lapFunctionTens <= 9 && lapFunctionSeconds <= 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + '0' + lapFunctionSeconds + ':' + '0' + lapFunctionTens;
    };
    if (lapFunctionTens > 9 && lapFunctionSeconds <= 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + '0' + lapFunctionSeconds + ':' + lapFunctionTens;
    };
    if (lapFunctionTens <= 9 && lapFunctionSeconds > 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + lapFunctionSeconds + ':' + '0' + lapFunctionTens;
    };
    if (lapFunctionTens > 9 && lapFunctionSeconds > 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + lapFunctionSeconds + ':' + lapFunctionTens;
    };
    totalTens = 0;
};

const resetFunction = () => {
    clearInterval(timer);
    timerTens = 00;
    timerSeconds = 00;
    displayTens.innerHTML = '0' + timerTens;
    displaySeconds.innerHTML = '0' + timerSeconds;
    lapCount = 0;
    lapSection.innerHTML = ''
};

startButton.addEventListener('click', startFunction);
stopButton.addEventListener('click', stopFunction);
lapButton.addEventListener('click', lapFunction);
resetButton.addEventListener('click', resetFunction);
