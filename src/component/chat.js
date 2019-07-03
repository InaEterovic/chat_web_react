import React from 'react';
import firebaseApp from '../firebase';
import firebase from 'firebase';

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.user = firebaseApp.auth.currentUser;
        this.state={
            username:''
        }
       

    }
    
    handleClick= ()=> {
        firebaseApp.auth.signOut();
        this.props.history.push('/');
    }
    getName(){
        const db = firebase.firestore();
        const docRef = db.collection("users").doc(this.user.uid);
        docRef.get().then(function(doc) {
            if (doc.exists) {
                console.log("Document data:", doc.data().name);
                return doc.data().name;
            } else {
            console.log("No such document!");
             }
        });
    }
    render(){      
        
        return(
            <div>
                <h1>Aqui va el chat </h1>
                <h2>{this.user.email}</h2>
                <button onClick={this.handleClick}>Sign out</button>
                
            </div>
        );
    }
}

export default Chat;