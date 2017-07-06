import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Genre.css';

const Genre = props => {
	return (
		<div className="genre">
			<Link to={'/view/' + props.id}>
				<img className="image" src={props.icon} alt="" />
				<p className="title">{props.name}</p>
			</Link>
		</div>
	);
};

export default Genre;

Genre.propTypes = {
	id: PropTypes.string.isRequired,
	icon: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
