//From chapter 1 of Node.js In Action
var fs = require('fs');
fs.readFile('./resource.json',function(err,data){
	console.log(data);
});