import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import firebaseApp from "../../firebase";
import { AuthContext } from "../../Auth";
import { Button,Grid, Typography, TextField } from "@material-ui/core";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await firebaseApp
          .auth
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/chat");
      } catch (error) {
        alert(error);
        console.log(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/chat" />;
  }

  return (
    <Grid container spacing={0}
     direction="column" 
     alignItems="center"
      justify="center" 
      style={{ minHeight: '100vh' }}>
      <Grid item xs={7} style={{margin: '2em'}}>
          <Typography variant='h4'>Login</Typography>
      </Grid>   
      <form onSubmit={handleLogin}>
      <Grid item s={10} style={{margin: '1em'}}>
          <TextField  
          id="outlined-name"
          label="Email"
          margin="normal"
          variant="outlined"
          name="email" 
          type="email" 
           />   
      </Grid>
      <Grid item s={10} style={{margin: '1em'}}>
          <TextField 
          id="outlined-password-input"
          label="Password"
          margin="normal"
          variant="outlined"
          name="password"
          type="password"  />
      </Grid>
      <Grid item s={10} style={{margin: '1em'}}>
        <Button fullWidth variant="contained" color="primary" type="submit">Login</Button>
      </Grid>   
      </form>
    </Grid>
  );
};

export default withRouter(Login);