"use strict";

const reviewsBtn = $('.reviews__button');
const recentCarBtn = $('#recent-car-btn');
const recomendedCarBtn = $('#recomended-car-btn');

const reviewsBlock = $('.reviews-block');
const recentCarBlock = $('#recent-car-block');
const recomendedCarBlock = $('#recomended-car-block');

let recentCarCheck = false;
let recomendedCarCheck = false;

let reviewsBlocks = document.querySelectorAll('.reviews-block_is-hired');

const likeIcons = document.querySelectorAll('.car-catalog__like-icon');

reviewsBtn.on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('show-all');
    setTimeout(function () {
        reviewsBlocks.forEach((reviewsBlock) => {
            reviewsBlock.classList.toggle('reviews-block_is-hired');
        });
    }, 800);
});

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
