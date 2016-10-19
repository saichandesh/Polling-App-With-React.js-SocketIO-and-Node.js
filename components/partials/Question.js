var React = require('react');

var Question = React.createClass({

	SendResponse(response) {
		this.props.emit('sendAnswer' , {answer : response, questionNumber : this.props.questions.length});
	},

	showAnswers(answer,i){
		var buttonTypes = ['primary', 'success', 'warning', 'danger'];
		return(
				<button key={i} 
						className={"col-xs-6 btn btn-"+ buttonTypes[i]} 
						onClick={this.SendResponse.bind(null, i)}>
						{i+1} - {answer}
				</button>
			  );
	},

	render() {
		return(
					<div>
						<h4>Question - {this.props.questions.length}</h4>
						<h2>{this.props.questions[this.props.questions.length -1].ques}</h2>
						<div className="row">
							{this.props.questions[this.props.questions.length -1].answers.map(this.showAnswers)}
						</div>
					</div>
			  );
	}
});

module.exports = Question;