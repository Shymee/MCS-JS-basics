let sumofMoney = prompt('Skolko deneg u vas s soboy?')
sumofMoney = parseFloat(sumofMoney)
let sumofApple = prompt('Skolko yablok vy kupili?')
sumofApple = parseFloat(sumofApple)
let summofBread = prompt('Skolko batonov hleba vy kupili?')
summofBread = parseFloat(summofBread)
let AppleCost = prompt('Skolko stoit odno yabloko?')
AppleCost = parseFloat(AppleCost)
let BreadCost = prompt('Skolko stoit odin baton hleba?')
BreadCost = parseFloat(BreadCost)
let g = sumofMoney >= sumofApple*AppleCost+summofBread*BreadCost
document.body.innerHTML = g
