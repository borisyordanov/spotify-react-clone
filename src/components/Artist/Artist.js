import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Artist.css';

const Artist = props => {
	return (
		<div className="artist">
			<Link to={'/artist/' + props.id}>
				<img className="image" src={props.img} alt="" />
				<p className="name">{props.name}</p>
			</Link>
		</div>
	);
};

export default Artist;

Artist.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
