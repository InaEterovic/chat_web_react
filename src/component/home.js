import React from 'react';

class Home extends React.Component{

    handleClick = (buttonName) => {
        if(buttonName ==='register')
        this.props.history.push("/register");
        if(buttonName ==='login')
        this.props.history.push("/login");
    }

    render()
    {

        return(
            <div>
                <h1>Welcome</h1>
                <button onClick={()=>this.handleClick('login')}>Login</button>
                <button onClick={()=>this.handleClick('register')} type="button">Register</button>
            </div>
        )
    }
}

export default Home;