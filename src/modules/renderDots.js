import handleDotClick from "./handleDotClick";

const dotsContainer = document.querySelector('.dots-container');
const noOfSlides = document.querySelector('.carousel-track').childElementCount;

export default function () {
	for (let index = 0; index < noOfSlides; index++) {
		const div = document.createElement('div');
		div.classList.add('dot-div');
		div.setAttribute('dot-number', index);
		if(index === 0) {
			div.classList.add('active-dot');
		}
		handleDotClick(div);
		dotsContainer.appendChild(div);
	}
}