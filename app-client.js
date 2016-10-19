import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router'
import APP from './components/APP'
import Audience from './components/Audience'
import Speaker from './components/Speaker'
import Board from './components/Board'
import Error404 from './components/Error404'
import AskQuestion from './components/AskQuestion'
import DisplayQuestions from './components/DisplayQuestions'

var  {Route, DefaultRoute, NotFoundRoute} = Router;

var routes = (
		<Route handler={APP}>
			<DefaultRoute handler={Audience} />
			<Route name="speaker" path="speaker" handler={Speaker}></Route>
			<Route name="board" path="board" handler={Board}></Route>
			<Route name="askquestion" path="askquestion" handler={AskQuestion} />
			<Route name="questions" path="questions" handler={DisplayQuestions}></Route>
			<NotFoundRoute handler={Error404} />
		</Route>
	);

Router.run(routes,function(Handler){
	ReactDOM.render(<Handler />, document.getElementById('react-container'));
});

