let number = prompt("Введите число");
number = parseInt(number);

if(number>=0) {
	console.log(number);
}else if(number<0) {
	console.log(number*-1);
}