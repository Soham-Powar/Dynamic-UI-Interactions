import "./styles.css";
import addBtnEvents from "./modules/addBtnEvents";
import handleNavDots from "./modules/handleNavDots";

document.addEventListener('DOMContentLoaded', () => {
	addBtnEvents();
	handleNavDots();
});