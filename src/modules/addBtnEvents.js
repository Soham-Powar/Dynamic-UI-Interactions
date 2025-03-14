const carouselTrack = document.querySelector('.carousel-track');
const slide = document.querySelector('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const slideWidth = parseInt(window.getComputedStyle(slide)
	.getPropertyValue('width'));
const noOfSlides = carouselTrack.childElementCount;

export default function () {
	prevBtn.addEventListener('click', movePrev);
	nextBtn.addEventListener('click', moveNext);

	// Auto-slide every 5 seconds
	setInterval(() => {
		moveNext();
	}, 5000);
}

function movePrev() {
	let leftPropValue = parseInt(window.getComputedStyle(carouselTrack).getPropertyValue('left'));

	if (leftPropValue === 0) {
		leftPropValue = -noOfSlides * slideWidth;
	}
	carouselTrack.style.left = (leftPropValue + slideWidth) + 'px';
}

function moveNext() {
	let leftPropValue = parseInt(window.getComputedStyle(carouselTrack).getPropertyValue('left'));

	if (leftPropValue === (-(noOfSlides - 1) * slideWidth)) {
		leftPropValue = slideWidth;
	}
	carouselTrack.style.left = (leftPropValue - slideWidth) + 'px';
}