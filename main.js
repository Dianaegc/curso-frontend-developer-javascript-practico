const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHamIcon=document.querySelector('.menu');
const mobileMenu=document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleDesktopMenu);
menuHamIcon.addEventListener('click',toggleMobileMenu);

function toggleDesktopMenu(){
    console.log('Click')
desktopMenu.classList.toggle('inactive') //quite o ponga si tiene inactive o no
}
console.log('js funcionando')

function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}