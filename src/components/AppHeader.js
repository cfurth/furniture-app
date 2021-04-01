import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  aboutButton: {
    marginLeft: 880,
    color: 'beige',
  },
  contactButton: {
    marginLeft: 12,
    color: 'beige',
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{backgroundColor: '#3c9e49', opacity: .89, color: 'beige'}}>
        <Toolbar variant="regular">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <a href='/carousel' style={{textDecoration: 'inherit', color: 'beige'}}>
            <Typography variant="h6" color="inherit">
              SB Classical Woodworking
            </Typography>
          </a>
          <a href='/about' style={{textDecoration: 'inherit'}}>
            <Button className={classes.aboutButton}>About</Button>
          </a>
          <a href='/contact' style={{textDecoration: 'inherit'}}>
            <Button className={classes.contactButton} color="inherit">Contact</Button>
          </a>
        </Toolbar>
      </AppBar>
    </div>
  );
}
