const skillsLine = document.querySelectorAll('.skills--progressPercent');
const dataProgroessLine = document.querySelectorAll('.skills--progressLine');



document.addEventListener('scroll', function (e) {
    if (skillsLine[0].getBoundingClientRect().top < 500) {
        skillsLine[0].style.width = dataProgroessLine[0].dataset.percent1;
        skillsLine[1].style.width = dataProgroessLine[1].dataset.percent2;
        skillsLine[2].style.width = dataProgroessLine[2].dataset.percent3;
        skillsLine[3].style.width = dataProgroessLine[3].dataset.percent4;
    }

});




