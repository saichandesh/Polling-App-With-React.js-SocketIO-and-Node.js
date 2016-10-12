var React = require('react');

var Header = React.createClass({

	propsTypes: {
		title: React.PropTypes.String
	},

	getDefaultProps() {
		return {
			status : 'disconnected'
		}
	},

	render(){
		return (
					<header className="row">
						<div className="col-xs-10">
							<h1>{this.props.title}</h1>
						</div>
						<div className="col-xs-2">
							<span id="connection-status" className={this.props.status}>{this.props.status}</span>
						</div>
					</header>
				);
	}
});

module.exports = Header;