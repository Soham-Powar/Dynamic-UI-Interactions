
export default function (activeDotNumber) {
	const allDots = document.querySelectorAll('.dot-div');
	allDots.forEach((dotDiv) => {
		if(parseInt(dotDiv.getAttribute('dot-number')) === activeDotNumber) {
			dotDiv.classList.add('active-dot');
		} else {
			dotDiv.classList.remove('active-dot');
		}
	});
}
