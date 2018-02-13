import React from 'react';
import { NavBar } from 'components/Navbar/NavBar';

export class Home extends React.Component {

	render() {
		return (
			<div>
				<NavBar/>
				<div className="columns">
					<div className="column is-half is-offset-one-quarter">
					</div>
				</div>
			</div>
		);
	}
}
