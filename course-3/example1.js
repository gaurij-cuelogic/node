var express = require('express');
var app = express();
app.get('/todos',function(req,res){
console.log("in get")
});
app.post('/todos',function(req,res){
    console.log("in post")
});
app.listen(3000);