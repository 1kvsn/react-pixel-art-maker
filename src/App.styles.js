import { createUseStyles } from 'react-jss';


export default createUseStyles({
  app: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'sans-serif',
  },
  colorSwatchContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  colorSwatch: {
    margin: '0.5rem',
		padding: 0,
		width: '25px',
		height: '25px',
		outline: 'none',
		border: 'none',
		cursor: 'pointer',
  },
  colorString: {
    maxWidth: '540px',
    fontFamily: 'monospace',
    wordWrap: 'break-word',
    marginTop: '20px',
    fontSize: '16px'
  }
})