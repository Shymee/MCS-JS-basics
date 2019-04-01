console.log(this); //указатель на контекст текущей работы

window.onscroll = function(){console.log(this);} //будем находиться в контексте окна, потому что к нему применяется функция

const button = document.querySelector('button');

button.onclick = function(){
	this.innerHTML = 'Pressed';
}

button.onclick = () => { //будет контекст Окна, потому что стрелочная функция
	console.log(this);
}

