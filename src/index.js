import "./styles.css";

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const carouselTrack = document.querySelector('.carousel-track');
const slide = document.querySelector('.slide');

const slideWidth = parseInt(window.getComputedStyle(slide)
	.getPropertyValue('width'));

prevBtn.addEventListener('click', () => {
    const leftPropValue = parseInt(window.getComputedStyle(carouselTrack)
		.getPropertyValue('left'));
	console.log(slideWidth);
    carouselTrack.style.left = (leftPropValue + slideWidth) + 'px';
});

nextBtn.addEventListener('click', () => {
    const leftPropValue = parseInt(window.getComputedStyle(carouselTrack)
		.getPropertyValue('left'));
    carouselTrack.style.left = (leftPropValue - slideWidth) + 'px';
});
