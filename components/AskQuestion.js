var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');

var Display = require('./partials/Display');

var AskQuestion = React.createClass({

	submitQuestion() {
		var question = {};
		question.answers = [];
		question.ques = ReactDOM.findDOMNode(this.refs.question).value;
		question.answers.push(ReactDOM.findDOMNode(this.refs.ans1).value);
		question.answers.push(ReactDOM.findDOMNode(this.refs.ans2).value);
		question.answers.push(ReactDOM.findDOMNode(this.refs.ans3).value);
		question.answers.push(ReactDOM.findDOMNode(this.refs.ans4).value);

		this.props.emit('askquestion',question);
		 window.location = "/#/speaker";
	},

	render() {
		return (
					<div>
						<Display if={this.props.status == 'connected'}>
							<form action="Javascript:void(0)" onSubmit={this.submitQuestion}>
								<label>Question</label><br/>
								<input ref="question"
									   className="form-control"
									   placeholder="Enter the Question"
									   required /><br/>
								<label>Multiple Choices</label>
								<input ref="ans1"
									   className="form-control"
									   placeholder="Answer1"
									   required /><br/>
								<input ref="ans2"
									   className="form-control"
									   placeholder="Answer2"
									   required /><br/>
								<input ref="ans3"
									   className="form-control"
									   placeholder="Answer3"
									   required /><br/>
								<input ref="ans4"
									   className="form-control"
									   placeholder="Answer4"
									   required /><br/>
								<button className="btn btn-primary">Submit the Question</button>
							</form>
						</Display>
						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>
			   );
	}
});

module.exports = AskQuestion;