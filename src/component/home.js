import React from 'react';

class Home extends React.Component{

    handleClick = (buttonName) => {
        if(buttonName ==='signUp')
        this.props.history.push("/signUp");
        if(buttonName ==='login')
        this.props.history.push("/login");
    }

    render()
    {

        return(
            <div>
                <h1>Welcome</h1>
                <button onClick={()=>this.handleClick('login')}>Login</button>
                <button onClick={()=>this.handleClick('signUp')} type="button">Sign Up</button>
            </div>
        )
    }
}

export default Home;