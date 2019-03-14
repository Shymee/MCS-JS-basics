let background = prompt('Какого цвета будет фон у страницы?');
document.body.style.background = background;

let text = prompt('Какой будет цвет текста на странице?');
const colortext = document.querySelector(".page");
colortext.style.color = text;

let inspire = prompt('Как зовут человека, который вас вдохновляет?');
const inspireperson = document.querySelector("span");
inspireperson.innerHTML = inspire;

let picture = prompt('Введите адрес картинки:');
const addpicture = document.querySelector("img");
addpicture.setAttribute('src', picture);

let bio = prompt('Введите текст страницы');
const textbio = document.querySelector(".shortBio");
textbio.innerHTML = bio;
console.log(textbio.className);
textbio.className += ' animated';

