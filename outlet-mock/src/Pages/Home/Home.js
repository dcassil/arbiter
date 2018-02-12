import actions from '../../actions/*.js';
import React from 'react';
import { NavBar } from '../../components/Navbar/NavBar';
// import ItemsGrid from '../../components/items/grid';

export class Home extends React.Component {
	componentWillMount() {
		this.state = {};
	}
	componentDidMount() {
		actions.Items.getItems()
			.then(resp => {
				resp.json().then(items => {
					console.log(items.data); // eslint-disable-line
					this.setState({ items: items.data });
				});
			});
	}

	render() {
		let items = this.state.items || [];
		// let itemsGrid = items ? <ItemsGrid { ...{ items } } /> : '';

		return (
			<div>
				<NavBar menu1={'Home'} menu2={'About'} />
				<div className="columns">
					<div className="column is-half is-offset-one-quarter">
						
						{items.map(item => {
							return item.Name;
						})}
						
					</div>
				</div>
			</div>
		);
	}
}
