let sumofMoney = prompt('Skolko deneg u vas s soboy?')
sumofMoney = parseFloat(sumofMoney)
let sumofApple = prompt('Skolko yablok vy kupili?')
sumofApple = parseFloat(sumofApple)
let sumofBread = prompt('Skolko batonov hleba vy kupili?')
sumofBread = parseFloat(sumofBread)
let AppleCost = prompt('Skolko stoit odno yabloko?')
AppleCost = parseFloat(AppleCost)
let BreadCost = prompt('Skolko stoit odin baton hleba?')
BreadCost = parseFloat(BreadCost)

function haveEnough(sumofMoney, sumofApple, sumofBread, AppleCost, BreadCost) {
	if (sumofMoney > sumofApple * AppleCost + sumofBread * BreadCost){
		return "Вам хватает денег на покупки";
	} else {
		return "Вам не хватает денег на покупки";
	}
}

document.body.innerHTML = haveEnough(sumofMoney, sumofApple, sumofBread, AppleCost, BreadCost);

