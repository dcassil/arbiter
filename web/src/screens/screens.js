import React from 'react';
import actions from 'actions/*.js';
// import NavBar from 'components/Navbar/NavBar';
import store from 'foundations/store';
// import main from 'screens/main';

// import ItemsGrid from '../../components/items/grid';

class Screens extends React.Component {
	render() {
		let name = this.props.screens || 'main';
		
		let Screen = actions.screens.getScreenByName(name); 

		return (
			<div>
				<Screen />
			</div>
			
		);
	}
}

export default store.subscribe(Screens, {
	screens: 'screens.selected',
});

