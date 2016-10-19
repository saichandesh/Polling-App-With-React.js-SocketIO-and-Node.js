var express = require('express');
var socket = require('socket.io');
var _ = require('underscore');

var app = express();
var connections = [];
var presentation_title = 'Untitled Presentation';
var audiences = [];
var speaker = {};
var questions = [];

app.use(express.static("./node_modules/bootstrap/dist"));
app.use(express.static("./"));

var server = app.listen(8080,function(){
	console.log("Server running at port:8080");
});

var io = socket.listen(server);

io.sockets.on('connection', function(socket){

	socket.once('disconnect',function(){
		connections.splice(connections.indexOf(socket), 1);
		var member = _.findWhere(audiences, {id : this.id});
		if(member){	
			audiences.splice(audiences.indexOf(member),1);
			io.sockets.emit('updateAudience', audiences);
		}else if(this.id == speaker.id){
			presentation_title = 'Untitled Presentation';
			speaker = {};
			io.sockets.emit('end',{presentation_title: presentation_title , speaker : ''});
		}
		socket.disconnect();
		console.log("Number of sockets Remaining: " + connections.length);
	});

	socket.on('join', function(payLoad){
		var  newMember = {
			id : this.id,
			name : payLoad.name,
			type : 'audience'
		}
		audiences.push(newMember);
		socket.emit('joined', newMember);
		io.sockets.emit('updateAudience', audiences);
	});

	socket.on('start', function(payLoad){
		speaker.id = this.id,
		speaker.name = payLoad.name,
		speaker.type = 'speaker',
		presentation_title = payLoad.presentationtitle
		this.emit('joined', speaker);
		io.sockets.emit('speakerStarted', presentation_title,audiences,speaker.name);
	});

	socket.emit('welcome', {
		presentation_title : presentation_title,
		audiences : audiences,
		speaker : speaker.name,
		questions : questions
	});

	socket.on('askquestion', function(question){
		question.results = [0,0,0,0];
		questions.push(question);
		io.sockets.emit('askquestion',questions);
	});

	socket.on('sendAnswer', function(payLoad){
		questions[payLoad.questionNumber-1].results[payLoad.answer]++;
		io.sockets.emit('results',questions);
	});

	connections.push(socket);
	console.log("Number of sockets connected: " + connections.length);
});