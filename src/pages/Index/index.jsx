import React, {Suspense} from 'react';
import { Link, withRouter, useHistory, useLocation, Route} from 'react-router-dom'
const A = React.lazy(() => import("@pages/Index/Demo/A"));
const B = React.lazy(() => import("@pages/Index/Demo/B"));
function Index() {
  let history = useHistory();
  let location = useLocation();
  console.log(history, location)
  let a = 'a';
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
        <Suspense fallback={<div>loading...</div>}>
          <Route path="/index/a" component={A} />
          <Route path="/index/b" component={B} />
        </Suspense>
          
        </div>
    </div>
  );
}

export default withRouter(Index);