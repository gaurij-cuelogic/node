var person = require('./Person.js');

var person1 = new person('abc','xyz');
console.log(person1);
// o/p : { firstName: 'abc', lastName: 'xyz', fullName: [Function] }
console.log(person1.fullName());
// o/p : abc xyz