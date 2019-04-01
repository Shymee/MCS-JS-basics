const request = document.querySelector('.request');
const popup = document.querySelector('.popup');
const closepopup = document.querySelector('.closePopup');
const openmenu = document.querySelector('.openMenu');
const closemenu = document.querySelector('.closeMenu');
let menu = document.querySelector('.menu');


request.addEventListener('click', function(){
popup.style.display = 'flex';
})

closepopup.addEventListener('click', function(){
popup.style.display = 'none';
})

openmenu.addEventListener('click', function(){
menu.style.left = 0;
})

closemenu.addEventListener('click', function(){
menu.style.left = '-50vw';
})