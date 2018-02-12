import React from 'react';
import { ItemCell } from '../../components/items/cell';
import 'bulma/css/bulma.css';

export class Grid extends React.Component {
	render() {
		let items = this.props.items || [];
	
		return (
			<div>
				{items.map(item => {
					return <ItemCell {...{ item }} />;
				})}
			</div>
		);
	}
}
