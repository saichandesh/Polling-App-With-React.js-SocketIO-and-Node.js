var React = require('react');
var ReactDOM = require('react-dom');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var NotFoundRoute = Router.NotFoundRoute;

var APP = require('./components/APP');
var Audience = require('./components/Audience');
var Speaker = require('./components/Speaker');
var Board = require('./components/Board');
var Error404 = require('./components/Error404');

var routes = (
		<Route handler={APP}>
			<DefaultRoute handler={Audience} />
			<Route name="speaker" path="speaker" handler={Speaker}></Route>
			<Route name="board" path="board" handler={Board}></Route>
			<NotFoundRoute handler={Error404} />
		</Route>
	);

Router.run(routes,function(Handler){
	ReactDOM.render(<Handler />, document.getElementById('react-container'));
});

