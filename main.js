"use strict";

const navBarMenu = {
	navbar: document.querySelector(".navbar"),
	homeLogo: document.querySelector(".navbar__logo"),
	menuLogoBtn: document.querySelector(".navbar__menu__logo"),
	navMenu: document.querySelector(".navbar__menu"),
	navMenuItem: document.querySelectorAll(".navbar__menu__item"),

	init() {
		// Handle to Logo btn
		this.menuLogoBtn.addEventListener("click", () => {
			const navbarMenu = document.querySelector(".navbar__menu");
			const home = document.querySelector(".home");
			
			navbarMenu.classList.toggle("navbar__menu-active");
			home.classList.toggle("menu-active");
		})

		this.homeLogo.addEventListener("click", () => {
			window.scroll({
				top: 0,
				left: 0,
				behavior: "smooth"
			});
		})

		// Scroll to section
		this.navMenu.addEventListener("click", (event) => {
			const target = event.target;
			const link = target.dataset.page;

			if(!link) {
				return;
			}

			if(link === ".skills") {
				document.querySelector(link).scrollIntoView({
					behavior: "smooth",
					block: "center"
				});
			} else {
				document.querySelector(link).scrollIntoView({
					behavior: "smooth",
					block: "start"
				});
			}

			
		})

		window.addEventListener("scroll", () => {
			if(window.scrollY > this.navbar.clientHeight) {
				this.navbar.classList.add("navbar-dark");
			} else {
				this.navbar.classList.remove("navbar-dark");
			}
		})
	}
}

const handleContact = {
	init() {
		const contactCard = document.querySelector(".contact__card");
		const contactMain = document.querySelector(".contact__main");
		const contactBtn = document.querySelector(".home__contact");

		contactCard.addEventListener("mousedown", () => {
			contactCard.classList.add("contact__card-active");
			
		});

		contactCard.addEventListener("animationend", () => {
			contactCard.style.display = "none";
			contactMain.style.display = "flex";
		});

		contactBtn.addEventListener("click", () => {
			this.moveToContactPage();
		})
	},

	moveToContactPage() {
		window.scroll({
			top: document.documentElement.scrollHeight,
			left: 0,
			behavior: "smooth"
		})
	}
}

const flexSlider = {
	currentPosition: 0,
	positionArr: [0, -100, -200, -300],
	skills: document.querySelectorAll(".skill"),

	init() {
		this.addEvent();
	},

	addEvent() {
		const skillsLeftBtn = document.querySelector(".skills__btn-left");
		const skillsRightBtn = document.querySelector(".skills__btn-right");

		skillsRightBtn.addEventListener("click", () => {
			this.moveItemToRight();
		})
		skillsLeftBtn.addEventListener("click", () => {
			this.moveItemToLeft();
		})
	},

	moveItemToRight() {
		if(this.currentPosition < this.positionArr.length - 1) {
			this.currentPosition++
		} else {
			this.currentPosition = 0;
		}

		this.skills.forEach(item => {
			item.style.transform = `translateX(${this.positionArr[this.currentPosition]}%)`;
		})
	},

	moveItemToLeft() {
		if(this.currentPosition === 0) {
			this.currentPosition = 3;
		} else {
			this.currentPosition--;
		}

		this.skills.forEach(item => {
			item.style.transform = `translateX(${this.positionArr[this.currentPosition]}%)`;
		})
	}
}



window.addEventListener("scroll", () => {
	const homeContainer = document.querySelector(".home__container");
	const homeHeight = homeContainer.getBoundingClientRect().height;
	const skillsHeight = document.querySelector(".skills").clientHeight;
	const navMenu = document.querySelectorAll(".navbar__menu__item");

	homeContainer.style.opacity = 1 - window.scrollY / homeHeight;

	if(scrollY < homeHeight) {
		navMenu.forEach((menu) => menu.classList.remove("active"));
	}
	if(scrollY > homeHeight / 2) {
		navMenu[1].classList.remove("active");
		navMenu[2].classList.remove("active");
		navMenu[0].classList.add("active");
	} 
	if(scrollY > homeHeight / 2 + skillsHeight ) {
		navMenu[0].classList.remove("active");
		navMenu[2].classList.remove("active");
		navMenu[1].classList.add("active");
	}
	if(scrollY > homeHeight + document.querySelector(".portfolio").clientHeight) {
		navMenu[0].classList.remove("active");
		navMenu[1].classList.remove("active");
		navMenu[2].classList.add("active");
	}

	
})

navBarMenu.init();
flexSlider.init();
handleContact.init();
