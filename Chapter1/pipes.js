//From chapter 1 of Node.js In Action
var http = require('http');
var fs = require('fs');
http.createServer(function (req,res){
	res.writeHead(200, {'Content-Type':'images/png'});
	fs.createReadStream('./image.png').pipe(res);
}).listen(3000);
console.log('Server running http://localhost:3000/');