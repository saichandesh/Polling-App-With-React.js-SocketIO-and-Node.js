var React = require('react');
var io = require('socket.io-client');
var Header = require('./partials/Header');

var APP = React.createClass({

	getInitialState(){
		return {
			status : 'disconnected'
		}
	},

	componentWillMount(){
		this.socket = io('http://localhost:8080');
		this.socket.on('connect', this.connect);
		this.socket.on('disconnect', this.disconnect);
	},

	connect(){
		this.setState({ status : 'connected'});
	},

	disconnect(){
		this.setState({ status : 'disconnected'});
	},

	render(){
		return (
					<div>
						<Header title="New Header" status={this.state.status}/>
					</div>
				);
	}
});

module.exports = APP;