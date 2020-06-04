import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Container, Button, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      display: 'flex',
      flexDirection: 'column',
    },
  },
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    padding: 50
  },
  button: {
    width: '100%'
  }
}));

export default function Login(props) {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Container className={classes.container}>
      <Typography variant='h3'>Login</Typography>
      <form className={classes.root} noValidate autoComplete="off" 
            onSubmit={()=> {
              props.userLogin(props.parentState);
              history.push('/')
              }}>
        <TextField id="username" label="Username" onChange={props.handleFieldChange} required />
        <TextField id="password" label="Password" type='password' onChange={props.handleFieldChange} required />
        <Button className={classes.button} type='submit'>Submit</Button>
      </form>
    </Container>
  );
}