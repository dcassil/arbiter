import React from 'react';
import { NavLink } from 'react-router-dom';
import 'bulma/css/bulma.css';
import './navBar.css';

export const NavBar = () => {
	let navs = [
		{
			title: 'Home',
			url: '/',
		},
		{
			title: 'Sources',
			url: '/sources',
		},
	];
	

	return (
		<div className="column is-half is-offset-one-quarter">
			<nav className="navbar ">
				<div id="navMenuExample" className="navbar-menu">
					<div className="navbar-start">
						{navs.map(nav => {
							let selected = window.location.pathname === nav.url;
							let classes = selected ? ' selected_nav' : '';

							return <NavLink key={nav.url} exact className={'navbar-item topPadding strong' + classes} to={nav.url}>{nav.title}</NavLink>;
						})}
					</div>
				</div>
			</nav>
		</div>					
	);
};
