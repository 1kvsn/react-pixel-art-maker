import React from 'react';

import useStyles from './Grid.styles';

const offCell = {
	on: false,
	color: '#000000',
}

const Grid = ({ currentColor, cells, setCells }) => {

	const classes = useStyles();

	// Whenever we click on a cell, we need to know the index of that cell. The onClick handler needs a reference to an event handler function. So we've created a closure which will close over the value 1 (if the cell index is 1) and return a function which is our event handler, so that way, inside of the function we've access to the value (which is unique for everyone)

	const updateCell = (i, defaultState) => (e) => {
		e.preventDefault(); // prevents the context menu from popping up on right click
		setCells(cells.map((cell,cellIndex) => {
			// console.log(e);
			// any cell which has changed is a new object
			if (cellIndex === i) {
				if (defaultState) return defaultState;
				// set to currentColor
				return {
					on: true,
					color: currentColor,
				}
			}
			// when no change, we return the existing cell object itself
			return cell;
		}))
	}


	return (
		<div className={classes.grid}>
			{cells.map((cell,i) => (
				<div 
					className={classes.cell} 
					style={{	background: cell.on ? cell.color : '#fff' }}
					key={i} 
					onClick={updateCell(i)}
					// handles right click context menu
					onContextMenu={updateCell(i, offCell)}
				>
				</div>
			))}
		</div>
	)
}

export default Grid;