var React = require('react');
var ReactDOM = require('react-dom');
var Link = require('react-router').Link;

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
					    <Link to="/speaker">Start the presentation</Link>
					</form>
			   );
	}
});

module.exports = JoinForm;
