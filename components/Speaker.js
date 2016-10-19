import React from 'react'
import {Link} from 'react-router'

import JoinSpeaker from './partials/JoinSpeaker'
import Display from './partials/Display'
import Attendance from './partials/Attendance'

class Speaker extends React.Component {

	render(){
		return (
					<div>
						<Display if={this.props.status == 'connected'}>
							<Display if={this.props.Memeber.name && this.props.Memeber.type == 'speaker'} >
								<h2>Welcome {this.props.Memeber.name}</h2>
								<p>
									<Link to="/askquestion">Ask a Question</Link>
								</p>
								<p>
									<Link to="/questions">Go to Board</Link>
								</p>
								<Display if={this.props.updateAudiences.length>0}>
									<Attendance updateAudiences={this.props.updateAudiences} />
								</Display>
							</Display>

							<Display if={!this.props.Memeber.name}>
								<h2>Start the Presentation</h2>
								<JoinSpeaker emit={this.props.emit} />
							</Display>
						</Display>

						<Display if={this.props.status == 'disconnected'}>
							<h2>Server stopped working. Will back soon...</h2>
						</Display>
					</div>
			   );
	}
}

module.exports = Speaker;