import React from 'react'
import {Link} from 'react-router'

class Error404 extends React.Component {

	render(){
		return (
					<div>				
						<h1>Whoops......</h1>
						<p>Page you requested not found.</p>

						<Link to="/">Join as Audience</Link><br/>
						<Link to="/Speaker">Join as Speaker</Link><br/>
						<Link to="/Board">Join as Board</Link>
					</div>

			   );
	}
}

module.exports = Error404;