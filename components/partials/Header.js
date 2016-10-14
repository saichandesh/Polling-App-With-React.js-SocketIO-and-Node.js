var React = require('react');

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
					<header className="row">
							<h1>{this.props.presentation_title}</h1>
							<p>{this.props.speaker}</p>
					</header>
				);
	}
});

module.exports = Header;