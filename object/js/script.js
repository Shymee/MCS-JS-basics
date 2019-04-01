console.log('You are at '+window.location);

let person = {
	name : "Полина",
	surname : "Малина",
	age : 27,
	cool : true,
	sayHello : function() { return 'Hello ' + this.name}
}

console.log(person.name);
console.log(person.sayHello());

person.canCode = true;

console.log(person);

person.age = 20;

console.log(person);

console.log(person['surname']);