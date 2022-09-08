const skillsLine = document.querySelectorAll('.skills--progressPercent');
const dataProgroessLine = document.querySelectorAll('.skills--progressLine');
const stats = document.querySelector('.stats');
const statsNumber = document.querySelectorAll('.stats--card .card--number');
let started = false;

const counter = (temp) => {
    const goal = temp.dataset.goal;
    console.log(goal);
    const count = setInterval(() => {
        temp.textContent++;
        if (temp.textContent == goal) {
            clearInterval(count);
        }
    }, 2000 / goal);

}

document.addEventListener('scroll', function (e) {
    if (skillsLine[0].getBoundingClientRect().top < 500) {
        for (let i = 0; i < skillsLine.length; i++) {

            skillsLine[i].style.width = skillsLine[i].dataset.progress;
        }
    }

    if (stats.getBoundingClientRect().top < 300 && !started) {

        statsNumber.forEach((temp) => {
            counter(temp);
        });
        started = true;
    }

});




var d = new Date("2015-01-15T10:59:59");
setInterval(function () {

    document.querySelector(".timeRemain--days .timeRemain--number").innerHTML = d.getDate();
    document.querySelector(".timeRemain--hours .timeRemain--number").innerHTML = d.getHours();
    document.querySelector(".timeRemain--minutes .timeRemain--number").innerHTML = d.getMinutes();
    document.querySelector(".timeRemain--seconds .timeRemain--number").innerHTML = d.getSeconds();
    d.setSeconds(d.getSeconds() - 1);
}, 1000);




