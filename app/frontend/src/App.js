import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';
import RecoveryPassword from './pages/RecoveryPassword';
import RegisterProduct from './pages/RegisterProduct';
import ValidateAccont from './pages/ValidateAccont';


function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Login }/>
      <Route exact path='/register' component={ Register }/>
      <Route exact path ='/recovery' component={ RecoveryPassword }/>
      <Route exact path = '/product/register' component={ RegisterProduct } />
      <Route exact path='/validate/:token' component={ ValidateAccont }/>
      <Route component={ NotFound }/>
    </Switch>
  );
}

export default App;
