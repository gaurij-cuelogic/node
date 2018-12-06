
console.log('server is starting');

var express = require('express');
var app = express();
var server = app.listen(3000,function(){
  console.log('done');
});

app.use(express.static('website'));

app.get('/search/:flower/:num', function(request,response){
    var data = request.params;
    var num = data.num;

    var reply = "";
    for(var i = 0; i<num; i++){
        reply += "i love " + data.flower + " too. ";
    }

    response.send(reply);
})