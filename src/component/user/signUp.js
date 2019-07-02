import firebase from 'firebase';
import React,{useCallback } from 'react';
import {db} from '../../firebase';
import {withRouter} from 'react-router';

const SignUp = ({ history }) => {

  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      await firebase.auth()
      .createUserWithEmailAndPassword( email.value, password.value)
      .then(()=> {
              let user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: name.value
          })
       });       
      history.push("/chat");
    } catch (error) {
      console(error);
    }
  }, [history]);

    return (
            <form onSubmit={handleSignUp}>
                <h2>Fill out your information</h2>
                <input type="email" 
                       name="email"
                       placeholder="Email"
                       />
                <input type="password" 
                       name="password"
                       placeholder="Password"
                       />
                <input type="text"
                       name="name"
                       placeholder="Full Name"
                       />
                <button type="submit">Sign Up</button>
            </form>
        );
};

export default withRouter(SignUp);