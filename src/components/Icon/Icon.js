import React from 'react';
import PropTypes from 'prop-types';
import './Icon.css';

const Icon = props => {
	return <div className={'icon-' + props.type} />;
};

export default Icon;

Icon.propTypes = {
	type: PropTypes.string.isRequired
};
