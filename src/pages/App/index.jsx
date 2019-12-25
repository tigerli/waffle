import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import '@/styles/index.less'
import Home from '@pages/Index'
import Login from '@pages/Login'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'
moment.locale('en')

let App = inject('system')(observer(() => {
    //npm install --save rc-form-hooks
    // https://www.jianshu.com/p/fc59cb61f7cc
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
}))

export default App