 var util = require('util');
var txt = 'Congratulate %s on his %dth birthday!';
var result = util.format(txt, 'abc', 6); 

console.log(result);
