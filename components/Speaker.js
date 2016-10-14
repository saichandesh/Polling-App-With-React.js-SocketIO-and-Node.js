var React = require('react');
var Link = require('react-router').Link;

var JoinSpeaker = require('./partials/JoinSpeaker');
var Display = require('./partials/Display');
var Attendance = require('./partials/Attendance');

var Speaker = React.createClass({

	render(){
		return (
					<div>
						<Display if={this.props.status == 'connected'}>
							<Display if={this.props.Memeber.name && this.props.Memeber.type == 'speaker'} >
								<h2>Welcome {this.props.Memeber.name}</h2>
								<Display if={this.props.updateAudiences.length>0}>
									<Attendance updateAudiences={this.props.updateAudiences} />
								</Display>
							</Display>

							<Display if={!this.props.Memeber.name}>
								<h2>Start the Presentation</h2>
								<JoinSpeaker emit={this.props.emit} />
							</Display>
						</Display>

						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>
			   );
	}
});

module.exports = Speaker;