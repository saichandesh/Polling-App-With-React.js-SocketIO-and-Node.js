var React = require('react');

var Display = require('./Display');

var Header = React.createClass({

	propsTypes: {
		presentation_title: React.PropTypes.String
	},

	getDefaultProps() {
		return {
			status : 'disconnected'
		}
	},

	render(){
		return (	
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand">
									<h2>{this.props.presentation_title}</h2>
									<Display if={this.props.speaker!=''}>
										<span>Speaker - {this.props.speaker}</span>
									</Display>
								</a>
							</div>
						</div>
					</nav>
				);
	}
});

module.exports = Header;