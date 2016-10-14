var React = require('react');
var Router = require('react-router');
var Link = Router.Link;
var Error404 = React.createClass({

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
});

module.exports = Error404;