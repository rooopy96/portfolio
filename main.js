"use strict";

const menuLogoBtn = document.querySelector(".navbar__menu__logo");

menuLogoBtn.addEventListener("click", () => {
	const navbarMenu = document.querySelector(".navbar__menu");
	const home = document.querySelector(".home");
	
	navbarMenu.classList.toggle("navbar__menu-active");
	home.classList.toggle("menu-active");
})