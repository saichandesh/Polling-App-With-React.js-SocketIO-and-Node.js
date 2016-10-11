var express = require('express');

var app = express();

app.use(express.static("./node_modules/bootstrap/dist"));
app.use(express.static("./"));

app.listen(8080,function(){
	console.log("Server running at port:8080");
});