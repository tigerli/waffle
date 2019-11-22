import React from 'react';
import { Button } from 'antd';
import { useHistory, useLocation} from 'react-router-dom'

function Login(props) {
  let history = useHistory();
  let location = useLocation();
  console.log(history, location)
  return (
    <div className="App">
      <Button type="primary">Login</Button>
    </div>
  );
}

export default Login;