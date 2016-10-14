var React = require('react');

var Display = require('./partials/Display');
var JoinForm = require('./partials/JoinForm');

var Audience = React.createClass({

	render(){
		return (
					<div>
						<Display if={this.props.status == 'connected'}>
							<Display if={this.props.Memeber.name && this.props.Memeber.type == 'audience'}>
								<h2>Welcome {this.props.Memeber.name}</h2>
								<p>{this.props.updateAudiences.length} audience members connected</p><br/>
								<p>The questions will appear soon...</p>
							</Display>

							<Display if={!this.props.Memeber.name}>
								<h3> Join the Session..</h3>
								<JoinForm emit = {this.props.emit}/>
							</Display>
						</Display>

						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>

			   );
	}
});

module.exports = Audience;