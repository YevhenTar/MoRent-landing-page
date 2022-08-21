"use strict";

const recentCarBtn = $('#recent-car-btn');
const recomendedCarBtn = $('#recomended-car-btn');

const recentCarBlock = $('#recent-car-block');
const recomendedCarBlock = $('#recomended-car-block');

let recentCarCheck = false;
let recomendedCarCheck = false;

const likeIcons = document.querySelectorAll('.car-catalog__like-icon');
console.log(likeIcons);

let likeIconCheck = false;


recentCarBtn.on('click', function (e) {
    e.preventDefault();
    if (recentCarCheck) {
        recentCarBtn.removeClass('is-active');
        recentCarBlock.removeClass('is-active');
        recentCarCheck = false;
    } else {
        recentCarBtn.addClass('is-active');
        recentCarBlock.addClass('is-active');
        recentCarCheck = true;
    }
});

recomendedCarBtn.on('click', function (e) {
    e.preventDefault();
    if (recomendedCarCheck) {
        recomendedCarBtn.removeClass('is-active');
        recomendedCarBlock.removeClass('is-active');
        recomendedCarCheck = false;
    } else {
        recomendedCarBtn.addClass('is-active');
        recomendedCarBlock.addClass('is-active');
        recomendedCarCheck = true;
    }
});

likeIcons.forEach((likeIcon) => {
    likeIcon.addEventListener("click", () => {
        likeIcon.classList.toggle('is-clicked');
    });
});
