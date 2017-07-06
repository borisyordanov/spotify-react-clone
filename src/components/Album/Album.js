import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Album.css';

const Album = props => {
	return (
		<div className="album">
			<Link to={'/album/' + props.id}>
				<img className="image" src={props.img} alt="" />
				<p className="title">{props.name}</p>
			</Link>
		</div>
	);
};

export default Album;

Album.propTypes = {
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
