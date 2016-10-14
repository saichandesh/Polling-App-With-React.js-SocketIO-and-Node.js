var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var JoinSpeaker = React.createClass({

	start() {
		var speaker = ReactDOM.findDOMNode(this.refs.name).value;
		var titlename = ReactDOM.findDOMNode(this.refs.title).value;
		this.props.emit('start', {name : speaker, presentationtitle : titlename});
	},

	render() {
		return (
					<form action="Javascript:void(0)" onSubmit = {this.start}>
						<label>Full Name</label>
						<input ref="name"
							   className="form-control"
							   placeholder = "Enter your name"
							   required /><br/>
					    <label>Title</label>
						<input ref="title"
							   className="form-control"
							   placeholder = "Enter your title"
							   required /><br/>
					    <button className="btn btn-primary">submit</button>
					</form>
			   );
	}
});

module.exports = JoinSpeaker;
