import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import '@/styles/index.less'
import Index from '@pages/Index'
import Login from '@pages/Login'
function App() {
    return (
        <>
            {/* 开启严格模式 */}
            <React.StrictMode>
                <Switch>
                    <Route path="/index" component={Index} />
                    <Route path="/login" exact component={Login} />
                    <Redirect to="/index"/> 
                </Switch>
            </React.StrictMode>
        </>
    )
}

export default App