import React from 'react'
import { CssBaseline, makeStyles } from '@material-ui/core'
import Header from './components/Header';
const useStyles =  makeStyles(theme => ({
  root:{
    minHeight:'100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL + '/assets/background.png'})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}))
function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
     <CssBaseline/>
     <Header/>
    </div>
  );
}

export default App;
