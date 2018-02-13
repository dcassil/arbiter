import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'bulma/css/bulma.css';

export const Button = (props) => {
	
	return (
		<div>
			<div className="columns">
				<div className="column is-half">
					<NavLink className="button is-danger" to={props.url}>{props.title}</NavLink>
				</div>
			</div>
		</div>
	);
};

Button.propTypes = {
	title: PropTypes.string,
	url: PropTypes.string
};
