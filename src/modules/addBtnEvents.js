export default function () {
	const prevBtn = document.querySelector('.prev');
	const nextBtn = document.querySelector('.next');
	const carouselTrack = document.querySelector('.carousel-track');
	const slide = document.querySelector('.slide');

	const slideWidth = parseInt(window.getComputedStyle(slide)
		.getPropertyValue('width'));
	const noOfSlides = carouselTrack.childElementCount;

	prevBtn.addEventListener('click', () => {
		let leftPropValue = parseInt(window.getComputedStyle(carouselTrack)
			.getPropertyValue('left'));

		if(leftPropValue === 0) {
			leftPropValue = -noOfSlides * slideWidth;
		}
		carouselTrack.style.left = (leftPropValue + slideWidth) + 'px';
	});

	nextBtn.addEventListener('click', () => {
		let leftPropValue = parseInt(window.getComputedStyle(carouselTrack)
			.getPropertyValue('left'));

		if(leftPropValue === (-(noOfSlides - 1) * slideWidth)) {
			leftPropValue = slideWidth;
		};
		carouselTrack.style.left = (leftPropValue - slideWidth) + 'px';
	});
};