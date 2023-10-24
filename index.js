let intervalIdOne = null;
let intervalIdTwo = null;

let isOneRunning = false;
let isTwoRunning = false;

function secondsToMinutesAndSeconds(totalSeconds) {
  var minutes = Math.floor(totalSeconds / 60);
  var seconds = totalSeconds % 60;
  return { minutes: minutes, seconds: seconds };
}

// Example usage:
let totalSeconds = 120; // Replace with your desired number of seconds
let playerTwoTime = 120; 

let clockOne = document.getElementById('clock-one');
let clockTwo = document.getElementById('clock-two');

const hElement = document.createElement('h1');
const h2Element = document.createElement('h1')
let result = secondsToMinutesAndSeconds(120);

hElement.innerHTML = `${result.minutes} : ${result.seconds}`;
h2Element.innerHTML = `${result.minutes} : ${result.seconds}`;

clockOne.append(hElement);
clockTwo.append(h2Element);

const setTimer = (index) => {
  const hElement = document.createElement('h1');
    hElement.style.margin = 0;
    let time = index === 0 ? totalSeconds : playerTwoTime;
    let result = secondsToMinutesAndSeconds(time);
    hElement.innerText = `${result.minutes} : ${result.seconds}`;

    if (index === 0 && totalSeconds > 1) {
      clockOne.innerHTML = '';
      clockOne.append(hElement);
      totalSeconds--;
    } else {
      clockTwo.innerHTML = '';
      clockTwo.append(hElement);
      playerTwoTime--;
    }
}

let startTimer = (index) => {
  // setTimer(index);
  let id = setInterval(() => {
    setTimer(index);
  }, 1000)
  return id;
}

let stopTimer = (index) => {
  if (index ===0 ) {
    clearInterval(intervalIdOne);
  } else {
    clearInterval(intervalIdTwo)
  }
}

clockOne.addEventListener('click', () => {
  intervalIdOne = startTimer(0);
  stopTimer(1);
});

clockTwo.addEventListener('click', () => {
  intervalIdTwo = startTimer(1);
  stopTimer(0);
})






