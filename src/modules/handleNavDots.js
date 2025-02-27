const dotsContainer = document.querySelector('.dots-container');
const noOfSlides = document.querySelector('.carousel-track').childElementCount;

export default function () {
	for (let index = 0; index < noOfSlides; index++) {
		const div = document.createElement('div');
		div.classList.add('dot-div');
		dotsContainer.appendChild(div);
	}
}