import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import '@/styles/index.less'
import Home from '@pages/Index'
import Login from '@pages/Login'
function App() {
    return (
        <>
            {/* 严格模式 */}
            {/* <React.StrictMode></React.StrictMode> */}
            <Switch>
                <Route path="/home" component={Home} />
                <Route path="/login" exact component={Login} />
                <Redirect to="/home"/> 
            </Switch>
        </>
    )
}

export default App