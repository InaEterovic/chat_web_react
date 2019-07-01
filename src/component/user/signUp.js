import firebase from 'firebase';
import React,{useCallback } from 'react';
import {db} from '../../firebase';
import {withRouter} from 'react-router';

class SignUp extends React.Component{

    constructor(props){
        super(props);
        this.state={
            email:'',
            password:'',
            name:''
        };
    }
    handleInputChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      }

    addUser= e =>{
        e.preventDefault();
        const name = this.state.name;
        const auth = 
        firebase.auth().createUserWithEmailAndPassword( this.state.email, this.state.password)
        .then(()=> {
          let user = firebase.auth().currentUser;
          user.updateProfile({
            displayName: name
          })
        }).catch(function(error) {
          console.log(error);
        });
        
        this.props.history.push("/chat");       
    }

    render(){
    return (
            <form onSubmit={this.addUser}>
                <h2>Fill out your information</h2>
                <input type="email" 
                       name="email"
                       placeholder="Email"
                       onChange={this.handleInputChange}
                       value={this.state.email}/>
                <input type="password" 
                       name="password"
                       placeholder="Password"
                       onChange={this.handleInputChange}
                       value={this.state.password}/>
                <input type="text"
                       name="name"
                       placeholder="Full Name"
                       onChange={this.handleInputChange}
                       value={this.state.name}/>
                <button type="submit">Sign Up</button>
            </form>
        )
    }
}

export default SignUp;