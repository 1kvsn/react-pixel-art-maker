import React, { useState, useMemo } from 'react';

import useStyles from './App.styles';
import Grid from './components/Grid/Grid';
import ColorPicker from './components/ColorPicker/ColorPicker';

const offCell = {
	on: false,
	color: '#000000',
}

const initialCells = Array.from({ length: 40 }, () => offCell);

function App() {
  const [currentColor, setCurrentColor] = useState('#56BC58');
	const [cells, setCells] = useState(initialCells);

  const classes = useStyles();

  // memoized the function using useMemo. Everytime the dependency cell changes, only then this function gets called.
  // const colorSwatch = useMemo(() => [...new Set(cells.filter(cell => cell.on).map(cell => cell.color))], [cells])

  const colorString = useMemo(() => cells.map(cell => cell.color.slice(1)).join(','), [cells])

  return (
    <div className={classes.app}>
      <ColorPicker 
        currentColor={currentColor} 
        onSetColor={setCurrentColor} 
      />
      <div className={classes.colorSwatchContainer}>
        {[...new Set(cells.filter(cell => cell.on).map(cell => cell.color))].map(color => (
          <div 
            key={color} 
            className={classes.colorSwatch} 
            style={{ background: color}}
            // set current color from history
            onClick={() => setCurrentColor(color)}
          >
          </div>
        ))}
      </div>
      <Grid cells={cells} setCells={setCells} currentColor={currentColor} />
      <p className={classes.colorString}>{colorString}</p>
    </div>
  );
}

export default App;
