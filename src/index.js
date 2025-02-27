import "./styles.css";
import addBtnEvents from "./modules/addBtnEvents";
import renderDots from "./modules/renderDots";

document.addEventListener('DOMContentLoaded', () => {
	addBtnEvents();
	renderDots();
});