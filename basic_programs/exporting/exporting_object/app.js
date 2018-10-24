// exports is an object. So, you can attach properties or method
// require() function will return an object { SimpleMessage : 'Hello World'}
var data = require('./data.js');
var message = require('./Message.js');
console.log(message);
console.log(message.simpleMsg);

console.log('name is:',data.name,'age is:',data.age);