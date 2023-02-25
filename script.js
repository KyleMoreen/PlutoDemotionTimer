const displayYear = document.getElementById('year');
const displayMonth = document.getElementById('month');
const displayDay = document.getElementById('day');
const displayHour = document.getElementById('hour');
const displayMinute = document.getElementById('minute');
const displaySecond = document.getElementById('second');

let currentTime = new Date();
const demotionTime = new Date(2006, 07, 24, 00, 00, 00, 00);

let delta = deltaTime(currentTime, demotionTime);
parseTime(delta);

setInterval(() => {
    currentTime = new Date();
    delta = deltaTime(currentTime, demotionTime);
    parseTime(delta);
    }, 500);

function deltaTime(current, origin) {
    const delta = current.getTime() - origin.getTime();
    return delta;
}

function parseTime(delta) {
    const years = Math.floor(delta / 31556952000);
    let remaining = delta % 31556952000;
    displayYear.innerText = `${years} \n Years`;

    const months = Math.floor(remaining / 2629746000);
    remaining = remaining % 2629746000;
    displayMonth.innerText = `${months} \n Months`;

    const days = Math.floor(remaining / 86400000);
    remaining = remaining % 86400000;
    displayDay.innerText = `${days} \n Days`;

    const hours = Math.floor(remaining / 3600000);
    remaining = remaining % 3600000;
    displayHour.innerText = `${hours} \n Hours`;

    const minutes = Math.floor(remaining / 60000);
    remaining = remaining % 60000;
    displayMinute.innerText = `${minutes} \n Minutes`;

    const seconds = Math.floor(remaining / 1000);
    displaySecond.innerText = `${seconds} \n Seconds`;
}
