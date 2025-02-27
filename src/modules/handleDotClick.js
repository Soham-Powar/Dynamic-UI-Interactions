const carouselTrack = document.querySelector('.carousel-track');
const slide = document.querySelector('.slide');
const slideWidth = parseInt(window.getComputedStyle(slide)
	.getPropertyValue('width'));

export default function (div) {
	div.addEventListener('click', () => {
		const dotNumber = div.getAttribute('dot-number');
		carouselTrack.style.left = (-(dotNumber) * slideWidth) + 'px';
	});
}