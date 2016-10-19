var React = require('react');
var Link = require('react-router').Link;

var Display = require('./partials/Display');

var DisplayQuestions = React.createClass({

	showResponse(question){
		this.props.emit('boardResponse',{selectedQuestion: question});
		window.location = "/#/board";
	},

	selectquestion(question, i){
		return(
					<tr onClick={this.showResponse.bind(null,i)} key={i}>
						<td>{i+1}. {question.ques}</td>
					</tr>
			  );
	},

	render(){
		return (
					<div>
						<Display if={this.props.status == 'connected'}>
							<Display if={this.props.questions.length>0}>
								<h2>Select the question to display the results</h2>
								<table className="table table-stripred">
									<tbody>
										{this.props.questions.map(this.selectquestion)}
									</tbody>
								</table>
							</Display>
							<Display if={!this.props.questions.length>0}>
								<h3>No questions on the Board.</h3>
								<p>
									<Link to="/askquestion">Ask a Question</Link>
								</p>
							</Display>
						</Display>

						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>

			   );
	}
});

module.exports = DisplayQuestions;