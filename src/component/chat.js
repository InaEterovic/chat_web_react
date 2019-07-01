import React from 'react';
import firebaseApp from '../firebase';

class Chat extends React.Component{
    user = firebaseApp.auth.currentUser;
    handleClick= ()=> {
        firebaseApp.auth.signOut();
        this.props.history.push('/');
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