import firebase from 'firebase';
import React from 'react';
import {db} from '../../firebase';

class Register extends React.Component{

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
        const db =firebase.firestore();
        db.settings({
            timestampsInSnapshots: true
          });
          const userRef = db.collection('users').add({
            email: this.state.email,
            password: this.state.password,
            name: this.state.name
          }); 
        this.setState({
            email:'',
            password:'',
            name:''
        })

        
    }

    render(){
    return (
            <form onSubmit={this.addUser}>
                <h2>Fill out your information</h2>
                <input type="text" 
                       name="email"
                       placeholder="write your email"
                       onChange={this.handleInputChange}
                       value={this.state.email}/>
                <input type="text" 
                       name="password"
                       placeholder="write a password"
                       onChange={this.handleInputChange}
                       value={this.state.password}/>
                <input type="text"
                       name="name"
                       placeholder="write your name"
                       onChange={this.handleInputChange}
                       value={this.state.name}/>
                <button type="submit">Register</button>
            </form>
        )
    }
}

export default Register;