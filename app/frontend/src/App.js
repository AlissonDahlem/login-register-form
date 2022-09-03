import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={ Login }/>
      <Route exact path='/register' component={ Register }/>
      <Route component={ NotFound }/>
    </Switch>
  );
}

export default App;
