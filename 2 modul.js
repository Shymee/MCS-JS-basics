let a = prompt('Skolko deneg u vas s soboy?')
a = parseFloat(a)
let b = prompt('Skolko yablok vy kupili?')
b = parseFloat(b)
let c = prompt('Skolko batonov hleba vy kupili?')
c = parseFloat(c)
let d = prompt('Skolko stoit odno yabloko?')
d = parseFloat(d)
let f = prompt('Skolko stoit odin baton hleba?')
f = parseFloat(f)
let g = a >= b*d+c*f
document.body.innerHTML = g