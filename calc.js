console.log("Basic HTTP Server");
console.log("Basic HTTP Server 2");
var http = require('http');

var handlerMethod = function(req,res){
	res.end("A simple response from a simple web server");
}
http.createServer(handlerMethod).listen(3456,'localhost');
console.log("HTTP Server is listening");

