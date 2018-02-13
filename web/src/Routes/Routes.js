import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { SourcesConnect } from '../Pages/Sources/Connect';
import { Home } from '../Pages/Home/Home';
import { Sources } from '../Pages/Sources/Sources';
import { SourcesConnectForm } from '../Pages/Sources/Form';

export class Routes extends React.Component {
	render() {
		return (
			<Router>
				<Switch>
					<Route exact path = '/' component = {Home} />>
					<Route path = '/sources' component = {Sources} />
					<Route path = '/sourcesConnect' component = {SourcesConnect} />
					<Route path = '/sourcesConnectForm' component = {SourcesConnectForm} />
					<Route render = { () => {
						return <p>You're lost.  This is how new Router Switch is suppose to work!</p>;
					}} />		
				</Switch>
			</Router>

		);
	}
}
