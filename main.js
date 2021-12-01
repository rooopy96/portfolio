"use strict";

const navBarMenu = {
	homeLogo: document.querySelector(".navbar__logo"),
	menuLogoBtn: document.querySelector(".navbar__menu__logo"),

	init() {
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


navBarMenu.init();
flexSlider.init();
handleContact.init();