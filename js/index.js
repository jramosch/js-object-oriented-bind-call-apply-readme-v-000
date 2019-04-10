let sally = { name: 'Sally' };

function greet(customer) {
    console.log(`Hi ${customer}, my name is ${this.name}!`);
}

greet.call(sally, 'Terry', 'George');

greet.apply(sally, ['Terry', 'George']);

