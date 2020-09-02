import React from 'react';

import useStyles from './ColorPicker.styles';

const ColorPicker = ({ currentColor, onSetColor }) => {

	const classes = useStyles();

	const colorChange = e => {
		onSetColor(e.target.value)
	}

	return (
		<input 
			className={classes.colorPicker} 
			type="color" 
			onChange={colorChange} 
			value={currentColor} 
		/>
	)
}

export default ColorPicker;