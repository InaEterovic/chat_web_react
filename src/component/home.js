import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


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
            <AppBar position="static">
                <Toolbar>
                <Button
                color='inherit'
                onClick={()=>this.handleClick('login')}>
                    Login
                </Button>
                <Button 
                color='inherit'
                onClick={()=>this.handleClick('signUp')} >
                    Sign Up
                </Button>
                </Toolbar>         
            </AppBar>
            <Grid container spacing={0} direction="column" alignItems="center" justify="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={7} style={{margin: '2em'}}>
                    <Typography  variant="h3" >
                    Welcome to our chat
                    </Typography>
                </Grid> 
                <Grid item xs={7} style={{margin: '1em'}}>
                    <Typography  variant="h5" >
                    Log in to start
                    </Typography>
                </Grid>   
                <Grid item xs={7}>
                <Button 
                variant='contained'
                color='primary'
                onClick={()=>this.handleClick('login')} >
                    Login
                </Button>
                </Grid>   
            </Grid> 
        </div>
           
        )
    }
}

export default Home;