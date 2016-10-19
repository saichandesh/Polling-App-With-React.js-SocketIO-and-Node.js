var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

var Display =require('./Display');

var JoinForm = React.createClass({

	submit() {
		var memeberName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name : memeberName});
	},

	render() {
		return (
					<form action="Javascript:void(0)" onSubmit = {this.submit}>
						<label>Full Name</label>
						<input ref="name"
							   className="form-control"
							   placeholder = "Enter your name"
							   required /><br/>
					    <button className="btn btn-primary">submit</button>&nbsp;
					    <Display if={this.props.speakername==''}>
					    	<Link to="/speaker">Start the presentation</Link>
					    </Display>
					</form>
			   );
	}
});

module.exports = JoinForm;
