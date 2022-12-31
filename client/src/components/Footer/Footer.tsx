import { makeStyles } from '@mui/styles';
import React from 'react';


const useStyles = makeStyles({

  footerStyles: {
    color: 'white',
    background: '#1c1c1c',
    fontSize:"1.5em",
  },
  bottom: {
    textAlign: 'center',
    padding: '5vh'
  }
})

export default function Footer() {

  const classes = useStyles();

  return (
    <footer className={classes.footerStyles}>
      <h5 className={classes.bottom}>Developed by Satyajit Talukder</h5>
    </footer>
  );
}
