let $ = document;
const navToggleIconElem = $.querySelector(".nav__toggle-icon");
const menuMobileElem = $.querySelector(".menu-mobile");
const menuMobileLinkElem = $.querySelectorAll('.menu-mobile__link')


navToggleIconElem.addEventListener("click", () => {
  navToggleIconElem.classList.toggle("nav__toggle-icon--open");
  menuMobileElem.classList.toggle("menu-mobile--open");
});

menuMobileLinkElem.forEach(element =>{
  element.addEventListener('click' , ()=>{
    navToggleIconElem.classList.remove("nav__toggle-icon--open")
    menuMobileElem.classList.remove("menu-mobile--open");
  })
})
AOS.init();