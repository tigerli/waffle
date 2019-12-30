import React from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import { ConfigProvider } from 'antd'
import { inject, observer } from 'mobx-react'
import '@/styles/index.less'
import Home from '@pages/Index'
import Login from '@pages/Login'
import enUS from 'antd/es/locale/en_US'
import zhCN from 'antd/es/locale/zh_CN'


let App = inject('system')(observer((props) => {
    //npm install --save rc-form-hooks
    // https://www.jianshu.com/p/fc59cb61f7cc
    let {system} = props
    let antdLocale = {}
    antdLocale['en_US'] = enUS
    antdLocale['zh_CN'] = zhCN
    return (
        <>
            {/* 严格模式 */}
            {/* <React.StrictMode></React.StrictMode> */}
            <ConfigProvider locale={antdLocale[system.locale]}>
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/login" exact component={Login} />
                    <Redirect to="/home"/> 
                </Switch>
            </ConfigProvider>
        </>
    )
}))

export default App