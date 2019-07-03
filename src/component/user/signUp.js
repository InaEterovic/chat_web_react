import firebase from 'firebase';
import React,{useCallback } from 'react';
import {withRouter} from 'react-router';
import { Grid, Typography, TextField, Button } from '@material-ui/core';

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      await firebase.auth()
      .createUserWithEmailAndPassword( email.value, password.value)
      .then( cred =>{
        const db = firebase.firestore();
          return db.collection('users').doc(cred.user.uid).set({
            name: name.value,
            email: email.value
          });
      });       
      history.push("/chat");
    } catch (error) {
      console.log(error);
    }
  }, [history]);

    return (
    <Grid container spacing={0}
      direction='column' 
      alignItems='center'
      justify='center' 
      style={{ minHeight: '100vh' }}>
      <form onSubmit={handleSignUp}>
        <Grid item xs={12} style={{margin: '2em'}}>
          <Typography variant='h4'>Sign Up</Typography>
        </Grid>
        <Grid item xs={12} style={{margin: '0.5em'}}>
          <TextField
          fullWidth
          id='outlined-name'
          label='Full Name'
          margin='normal'
          variant='outlined'
          type='text'
          name='name' />
        </Grid>
        <Grid item xs={12} style={{margin: '0.5em'}}>
          <TextField 
          fullWidth
          id='outlined-name'
          label='Email'
          margin='normal'
          variant='outlined'
          type='email' 
          name='email'/>
        </Grid>
        <Grid item xs={12} style={{margin: '0.5em'}}>
          <TextField
          fullWidth
          id='outlined-password-input'
          label='Password'
          margin='normal'
          variant='outlined'
          type='password' 
          name='password'/>
        </Grid>
        <Grid item xs={12} style={{margin: '0.5em'}}>
          <Button fullWidth variant='contained' color='primary' type='submit'>Sign Up</Button>
        </Grid>
      </form>
    </Grid>          
        );
};

export default withRouter(SignUp);