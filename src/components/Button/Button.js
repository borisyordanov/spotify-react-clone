import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';


const Button = props => {
	return (
		<button className="btn" onClick={props.clickHandler}>
			{props.children}
		</button>
	);
};

export default Button;

Button.propTypes = {
	clickHandler: PropTypes.func
};
