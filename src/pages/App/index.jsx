import React from 'react';
import {Route, Switch, Redirect, useHistory, useLocation} from 'react-router-dom'
import Index from '@pages/Index';
import Login from '@pages/Login';
function App(props) {
  let history = useHistory();
  let location = useLocation();
  console.log(history, location)
  return (
    <>
      <Switch>
        <Route path="/index" component={Index} />
        <Route path="/login" exact component={Login} />
        <Redirect to="/index"/> 
      </Switch>
    </>
  );
}

export default App;