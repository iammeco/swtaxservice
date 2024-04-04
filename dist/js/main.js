console.log("Wynn Programs");

const navE1 = document.querySelector('.nav');
const hamburgerE1 = document.querySelector('.hamburger');
const navItemE1s = document.querySelectorAll('.nav_item');

hamburgerE1.addEventListener('click', () => {
    navE1.classList.toggle('nav--open');
    hamburgerE1.classList.toggle('hamburger--open');
});

navItemE1s.forEach(navItemE1 => {
    navItemE1.addEventListener('click', () => {
        navE1.classList.remove('nav--open');
        hamburgerE1.classList.remove('hamburger--open');
    });
});

const countdown = () => {
    const countDate = new Date("April 19, 2024 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now; 

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    document.querySelector('.day').innerHTML = textDay;
    document.querySelector('.hour').innerHTML = textHour;
    document.querySelector('.minute').innerHTML = textMinute;
    document.querySelector('.second').innerHTML = textSecond;

};

setInterval(countdown, 1000);



