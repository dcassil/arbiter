import actions from 'actions/*.js';
import React from 'react';
import { NavBar } from 'components/Navbar/NavBar';
import store from 'foundations/store';

// import ItemsGrid from '../../components/items/grid';

class Home extends React.PureComponent {
	componentDidMount() {
		actions.Items.getItems();
	}

	render() {
		let items = this.props.items || [];
		
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

export default store.subscribe(Home, {
	items: 'items',
});

