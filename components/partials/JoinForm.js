import React from 'react'
import ReactDOM from 'react-dom'
import {Link} from 'react-router'

import Display from './Display'

class JoinForm extends React.Component {

	constructor(){
		super();
		this.submit = this.submit.bind(this);
	}

	submit() {
		var memeberName = ReactDOM.findDOMNode(this.refs.name).value;
		this.props.emit('join', {name : memeberName});
	}

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
}

module.exports = JoinForm;
