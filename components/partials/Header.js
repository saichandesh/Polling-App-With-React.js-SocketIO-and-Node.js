import React from 'react'

import Display from './Display'

class Header extends React.Component {

	render(){
		return (	
					<nav className="navbar navbar-inverse">
						<div className="container-fluid">
							<div className="navbar-header">
								<a className="navbar-brand">
									<h2>{this.props.presentation_title}</h2>
									<Display if={this.props.speaker!=''}>
										<span>Speaker - {this.props.speaker}</span>
									</Display>
								</a>
							</div>
						</div>
					</nav>
				);
	}
}

Header.PropTypes = {
	presentation_title: React.PropTypes.String
};

Header.deafaultProps = {
	status : 'disconnected'
};

module.exports = Header;