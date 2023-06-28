console.log("Connected")

setInterval(() => {
    date = new Date();
    hourTime = date.getHours();
    minutesTime = date.getMinutes();
    secondsTime = date.getSeconds();
    // console.log(hourTime, minuteTime, secondTime)

    hourRotation = 30 * hourTime + minutesTime / 2;
    minutesRotation = 6 * minutesTime;
    secondsRotation = 6 * secondsTime;
    // console.log(hourRotation, minutesRotation, secondsRotation)

    hour.style.transform = `rotate(${hourRotation}deg)`;
    minute.style.transform = `rotate(${minutesRotation}deg)`;
    second.style.transform = `rotate(${secondsRotation}deg)`;
}, 1000)