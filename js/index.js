function greet() {
	console.log(`my name is ${this.name}, hi!`);
}

greet();

let person = {
  name: 'Bob',
  greet: greet
};

person.greet();

let sally = { name: 'Sally' };

greet.call(sally);

greet.apply(sally);

