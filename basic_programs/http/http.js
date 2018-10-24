var http = require('http');

//The HTTP module can create an HTTP server that listens to server ports and gives a response back to the client.
http.createServer(function(req,res){
    res.write("hello world");
    res.end();
}).listen(8080);

//add http header
//If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('Hello World!');
    res.end();
  }).listen(8080);

  //read query string
  http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
    res.end();
}).listen(8080);

//split query string
var url = require('url');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.end(txt);
  }).listen(8080);