import React from 'react'
import io from 'socket.io-client'
import Router from 'react-router'
import Header from './partials/Header'

var RouteHandler = Router.RouteHandler;

class APP extends React.Component {

	constructor(){
		super();
		this.state = {
			status : 'disconnected',
			presentation_title : '',
			Memeber : {},
			speaker: '',
			updateAudiences : [],
			questions: [],
			answered : 'no',
			selectedQuestion : 0
		};
		this.emit = this.emit.bind(this);
	}

	componentWillMount(){
		this.socket = io('http://localhost:8080');
		this.socket.on('connect', () => {
			var memeber = (sessionStorage.Memeber) ? JSON.parse(sessionStorage.Memeber) : null;
			if(memeber && memeber.type == 'audience'){
				this.emit('join',memeber);
			} else if(memeber && memeber.type == 'speaker'){
				this.emit('start', {name: memeber.name, presentationtitle: JSON.parse(sessionStorage.presentationTitle)});
			}
			this.setState({ status : 'connected'});
		});
		this.socket.on('disconnect', () => this.setState({ status : 'disconnected'}));
		this.socket.on('welcome',(x) => this.setState(x));
		this.socket.on('joined',(newMember) => {
			sessionStorage.Memeber = JSON.stringify(newMember);
			this.setState({Memeber : newMember});
		});
		this.socket.on('updateAudience', (audiences) => {
			this.setState({updateAudiences : audiences});
		});
		this.socket.on('speakerStarted',(title,audiences,speakerName) => {
			this.setState({presentation_title : title, updateAudiences:audiences, speaker:speakerName});
			sessionStorage.presentationTitle = JSON.stringify(title);
		});
		this.socket.on('end',(x) => this.setState(x));
		this.socket.on('askquestion',(questionsFromServer) => {
			this.setState({questions : questionsFromServer, answered : 'no'});
		});
		this.socket.on('answer',(x) => this.setState(x));
		this.socket.on('results',(data) => {
			this.setState({ questions:data });
		});
	}

	emit(eventName, payLoad){
		if(eventName=='boardResponse'){
			this.setState({selectedQuestion : payLoad.selectedQuestion});
		}else{
			if(eventName == 'sendAnswer'){
			var name = 'question ' + payLoad.questionNumber;
			this.setState({answered : 'yes'});
			}
			this.socket.emit(eventName,payLoad);
		}
	}

	render(){
		return (
					<div>
						<Header {...this.state}/>
						<div id="datacontainer">
							<RouteHandler emit = {this.emit} {...this.state}/>
						</div>
					</div>
				);
	}
}

module.exports = APP;