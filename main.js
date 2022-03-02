const burgerIcon = document.querySelector('.burger-icons');
const mobileNavbar = document.querySelector('.mobile_navbar');
const bars=document.querySelector(".fa-bars");
burgerIcon.addEventListener('click', () => {
	mobileNavbar.classList.toggle('show-nav');
    bars.classList.toggle('whitened');
});
