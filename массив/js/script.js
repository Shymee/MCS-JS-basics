console.log('You are at '+window.location);

var numbers = [];
for (let i = 1; i <= 100000; i++){
	if (i % 6 == 0) {
		numbers.push(" " + i);
	}
}

document.body.innerHTML = numbers;
