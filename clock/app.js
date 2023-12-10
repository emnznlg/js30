const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate() {
  const now = new Date();
  const secondsDegrees = (now.getSeconds() / 60) * 360;
  const hoursDegrees = (now.getHours() / 12) * 360 + 90;
  const minDegrees = (now.getMinutes() / 60) * 360 + 90;

  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minHand.style.transform = `rotate(${minDegrees}deg)`;
}

setInterval(setDate, 1000);
