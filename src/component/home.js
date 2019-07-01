import React from 'react';
import Button from '@material-ui/core/Button';


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
                <Button variant="contained" color="primary" onClick={()=>this.handleClick('login')}>Login</Button>
                <Button variant="contained" color="primary" onClick={()=>this.handleClick('signUp')} type="button">Sign Up</Button>
            </div>
        )
    }
}

export default Home;