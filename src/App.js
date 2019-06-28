import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/home';
import Register from './component/user/register';
import Login from './component/user/login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/register' component={Register}/>
        <Route path='/login' component={Login}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
