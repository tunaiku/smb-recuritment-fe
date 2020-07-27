import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
    backgroundColor: '#03a9f4'
  },
  toolbarTitle: {
    color: 'white',
    flexGrow: 1,
  },
  link: {
    color: 'white',
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [logout, setLogout] = useState(false)

  if (logout) {
      return (<Redirect to="/login"/>)
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            Dashboard
          </Typography>
          <nav>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Menu 1
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Menu 2
            </Link>
            <Link variant="button" color="textPrimary" href="#" className={classes.link}>
              Menu 3
            </Link>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.link} onClick={() => setLogout(true)}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h3" align="center" color="textPrimary" gutterBottom>
          Welcome to Tunaiku Dashboard
        </Typography>
      </Container>
    </React.Fragment>
  );
}