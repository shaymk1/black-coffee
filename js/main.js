/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
	const scroll = document.getElementById("header");
	//when the scroll is greater than 50 viewport,add the scroll-header-class
	this.scrollY >= 50
		? header.classList.add("scroll-header")
		: header.classList.remove("scroll-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SHOW SCROLL UP ===============*/

const scrollUp = () => {
	const scrollUp = document.getElementById("scroll-up");
	//when the scroll is greater than 350 viewport,add the scroll-header-class
	this.scrollY >= 350
		? scrollUp.classList.add("show-scroll")
		: scrollUp.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

const sections = document.querySelectorAll("section[id]");
const scrollActive = () => {
	const scrollY = window.pageYOffset;
	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight,
			sectionTop = current.offsetTop - 58,
			sectionId = current.getAttribute("id"),
			sectionsClass = document.querySelector(".nav__menu a[href*=" + sectionId);
		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionsClass.classList.add("active-link");
		} else {
			sectionsClass.classList.remove("active-link");
		}
	});
};

/*=============== SCROLL REVEAL ANIMATION ===============*/
