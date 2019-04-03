console.log('You are at '+window.location);
var numbers = "";

for (i = 1; i <= 100000; i++){
	if (i % 6 == 0){
		//numbers += "<div>" + i + "</div>"
		numbers += i + " ";
		}
}

document.body.innerHTML = numbers