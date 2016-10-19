import React from 'react'

import Display from './partials/Display'
import JoinForm from './partials/JoinForm'
import Question from './partials/Question'

class Audience extends React.Component {

	render(){
		var name = 'question '+ this.props.questions.length;
		return (
					<div>
						<Display if={this.props.status == 'connected'}>
							<Display if={this.props.Memeber.name && this.props.Memeber.type == 'audience'}>
								<Display if={!this.props.questions.length>0}>
									<h2>Welcome {this.props.Memeber.name}</h2>
									<p>{this.props.updateAudiences.length} audience members connected</p><br/>
									<p>The questions will appear soon...</p>
								</Display>
								<Display if={this.props.questions.length>0}>
									<Display if={this.props.answered == 'no'}>
										<Question questions={this.props.questions} emit={this.props.emit} />
									</Display>
									<Display if={this.props.answered == 'yes'}>
										<p>The questions will appear soon...</p>
									</Display>
								</Display>
							</Display>

							<Display if={!this.props.Memeber.name}>
								<h3> Join the Session..</h3>
								<JoinForm emit = {this.props.emit} speakername = {this.props.speaker} />
							</Display>
						</Display>

						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>

			   );
	}
}

module.exports = Audience;