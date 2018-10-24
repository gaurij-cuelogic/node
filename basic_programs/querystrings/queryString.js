var querystring = require('querystring');
var q = querystring.parse('year=2018&month=march');
console.log(q.year);