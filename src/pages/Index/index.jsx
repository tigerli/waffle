import React from 'react';
import { Link, useHistory, Route} from 'react-router-dom'
import A from '@pages/Index/Demo/A'
import B from '@pages/Index/Demo/B'
function Index() {
  let history = useHistory();
  let a = 'a1';
  if(a !== 'a'){
    history.push("/login");
  }

  return (
    <div className="App">
      <ul style={{ listStyleType: "none", padding: 0 }}>
        <li>
          <Link to='/index/a'>A</Link>
        </li>
        <li>
          <Link to='/index/b'>B</Link>
        </li>
      </ul>
      <div style={{ flex: 1, padding: "10px", background:'#ABC' }}>
          <Route path="/index/a" component={A} />
          <Route path="/index/b" component={B} />
        </div>
    </div>
  );
}

export default Index;