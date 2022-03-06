// function toggle() {
// 	let sec = document.getElementById("sec");
// 	let nav = document.getElementById("navigation");
// 	sec.classList.toggle("active");
// 	nav.classList.toggle("active");
// }

const container = document.querySelector(".header");
const nav = document.querySelector(".navbar");

const options = {
	root: container,
	threshold: 0.55,
};

const changeColor = (entries, observer) => {
	console.log("runs the code!");
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			container.classList.add("nav-scrolled");
		} else {
			container.classList.remove("nav-scrolled");
		}
	});
};

const observer = new IntersectionObserver(changeColor, options);

observer.observe(nav);
