const displayTens = document.querySelector('#tens');
const displaySeconds = document.querySelector('#seconds');
const lapTens = document.querySelector('#lap-tens');
const lapSeconds = document.querySelector('#lap-seconds');
const startButton = document.querySelector('#start-button');
const stopButton = document.querySelector('#stop-button');
const lapButton = document.querySelector('#lap-button');
const resetButton = document.querySelector('#reset-button');
const lapSection = document.querySelector(".lap-section");
let realTens = 0;
let rodolfoTens = 0;
let realSeconds = 0;
let tens = 00;
let seconds = 00;
let timer;
let lapCount = 0;

const startTimer = () => {
    tens++;
    realTens++;
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
    lapCount++;
    realSeconds = Math.floor(realTens / 100);
    rodolfoTens = realTens - (realSeconds * 100);
    const lapElement = document.createElement("p");
    lapSection.append(lapElement);
    if (rodolfoTens <= 9 && realSeconds <= 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + '0' + realSeconds + ':' + '0' + rodolfoTens;
    };
    if (rodolfoTens > 9 && realSeconds <= 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + '0' + realSeconds + ':' + rodolfoTens;
    };
    if (rodolfoTens <= 9 && realSeconds > 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + realSeconds + ':' + '0' + rodolfoTens;
    };
    if (rodolfoTens > 9 && realSeconds > 9) {
        lapElement.innerHTML = 'LAP ' + lapCount + ' : ' + realSeconds + ':' + rodolfoTens;
    };
    realTens = 0;
};

const resetFunction = () => {
    clearInterval(timer);
    tens = 00;
    seconds = 00;
    displayTens.innerHTML = '0' + tens;
    displaySeconds.innerHTML = '0' + seconds;
    lapCount = 0;
    lapSection.innerHTML = ''
};

startButton.addEventListener('click', startFunction);
stopButton.addEventListener('click', stopFunction);
lapButton.addEventListener('click', lapFunction);
resetButton.addEventListener('click', resetFunction);
