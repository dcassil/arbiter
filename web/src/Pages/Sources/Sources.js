import React from 'react';
import { Button } from 'components/Button/Button';
import { NavBar } from 'components/Navbar/NavBar';

export class Sources extends React.Component {
	render() {
		return (
			<div>
				<NavBar/>
				<div className="column is-half is-narrow is-offset-one-quarter">
					<Button title="Connect Sources" url="/sourcesConnect"/>
				</div>
			</div>
		);
	}
}
