var express = require('express');
var socket = require('socket.io');

var app = express();

var connections = [];

app.use(express.static("./node_modules/bootstrap/dist"));
app.use(express.static("./"));

var server = app.listen(8080,function(){
	console.log("Server running at port:8080");
});

var io = socket.listen(server);

io.sockets.on('connection', function(socket){

	socket.once('disconnect',function(){
		connections.splice(connections.indexOf(socket), 1);
		socket.disconnect();
		console.log("Number of sockets Remaining: " + connections.length);
	});

	connections.push(socket);
	console.log("Number of sockets connected: " + connections.length);
});