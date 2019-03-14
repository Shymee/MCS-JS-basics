const rock = 0;
const scissors = 1;
const paper = 2;

// попросим игрока ввести ответ в виде числа
let player = parseInt(prompt('Your choice: 0 - rock, 1 - scissors, 2 - paper'));
// Рандомное число 0, 1 или 2 — разберем это позже, пока не заморачивайтесь
let computer = Math.floor(Math.random() * 3);

// опишем все условия и будем выводить в консоль 'computer win' или 'player win'
if(rock && scissors){
	console.log('player win');
}else if(rock && rock){
	console.log('friendship win');
}else if(rock && paper){
	console.log('computer win')
}else if(scissors && rock){
	console.log('computer win');
}else if(scissors && scissors){
	console.log('friendship win');
}else if(scissors && paper){
	console.log('player win');
}else if(paper && rock){
	console.log('player win');
}else if(paper && scissors){
	console.log('computer win');
}else{
	console.log('friendship win');
}


