import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Playlist.css';

const Playlist = props => {
	return (
		<div className="playlist">
			<Link to={'/user/' + props.author + '/playlist/' + props.id}>
				<img className="image" src={props.img} alt="" />
				<p className="title">{props.name}</p>
			</Link>
			<Link to={'/user/' + props.author}>
				<p className="author">By {props.author}</p>
			</Link>
		</div>
	);
};

export default Playlist;

Playlist.propTypes = {
	author: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	img: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
};
