var React = require('react');
var io = require('socket.io-client');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

var Header = require('./partials/Header');

var APP = React.createClass({

	getInitialState(){
		return {
			status : 'disconnected',
			presentation_title : '',
			Memeber : {},
			speaker: '',
			updateAudiences : []
		}
	},

	componentWillMount(){
		this.socket = io('http://localhost:8080');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
		this.socket.on('welcome',this.welcome);
		this.socket.on('joined',this.joined);
		this.socket.on('updateAudience', this.updatedAudience);
		this.socket.on('speakerStarted',this.speakerStarted);
		this.socket.on('end',this.updateState);
	},

	emit(eventName, payLoad){
		this.socket.emit(eventName,payLoad);
	},

	connect(){
		var memeber = (sessionStorage.Memeber) ? JSON.parse(sessionStorage.Memeber) : null;
		if(memeber && memeber.type == 'audience'){
			this.emit('join',memeber);
		} else if(memeber && memeber.type == 'speaker'){
			this.emit('start', {name: memeber.name, presentationtitle: JSON.parse(sessionStorage.presentationTitle)});
		}
		this.setState({ status : 'connected'});
	},

	disconnect(){
		this.setState({ status : 'disconnected'});
	},

	welcome(serverState){
		this.setState({ presentation_title : serverState.presentation_title, updateAudiences: serverState.audiences, speaker: serverState.speaker});
	},

	joined(newMember) {
		sessionStorage.Memeber = JSON.stringify(newMember);
		this.setState({Memeber : newMember});
	},

	updatedAudience(audiences){
		this.setState({updateAudiences : audiences});
	},

	speakerStarted(title,audiences,speakerName) {
		this.setState({presentation_title : title, updateAudiences:audiences, speaker:speakerName});
		sessionStorage.presentationTitle = JSON.stringify(title);
	},
	updateState(serverState) {
		this.setState(serverState);
	},

	render(){
		return (
					<div>
						<Header {...this.state}/>
						<RouteHandler emit = {this.emit} {...this.state}/>
					</div>
				);
	}
});

module.exports = APP;