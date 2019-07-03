import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './component/home';
import Login from './component/user/login';
import { AuthProvider } from './Auth';
import Chat from './component/chat';
import PrivateRoute from './Routes/PrivateRoute';
import SignUp from './component/user/signUp';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/signUp' component={SignUp}/>
          <Route path='/login' component={Login}/>
          <PrivateRoute path='/chat' component={Chat}/>
        </Switch>
      </BrowserRouter>
    </AuthProvider>
    
  );
}

export default App;
