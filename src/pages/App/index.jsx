import React from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom'
import Index from '@pages/Index';
import Login from '@pages/Login';
function App(props) {
  let history = useHistory();
  let location = useLocation();
  console.log(history, location)
  return (
    <>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/index/" component={Index} />
      </Switch>
    </>
  );
}

export default App;