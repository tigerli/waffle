import React, { useEffect } from 'react'
import { withRouter, useHistory } from 'react-router-dom'
import { Layout } from 'antd'
import { useMediaQuery } from 'react-responsive'
import style from './index.module.less'
import { inject, observer } from 'mobx-react'
import MenuWrapper from '@layouts/Menu'
import DrawerWrapper from '@layouts/Drawer'
import ContentWrapper from '@layouts/Content'
import HeaderWrapper from '@layouts/Header'
import { getToken } from '@utils/auth'
import { isEmpty } from '@library/utils/validate'
import Routers from '@library/routes'
import { create } from 'mobx-persist'
const hydrate = create()
const { Sider } = Layout

let Index = inject('system', 'themeStore')(observer((props) => {
    let {system, themeStore} = props
    // const isMobile = useMediaQuery({
    //     query: '(max-device-width: 991px)'
    // })
    let history = useHistory()
    useEffect(() => {
        if(isEmpty(getToken())){
            history.push('/login')
        }
        const initialState =  {
            obj: { dark: false, theme: 'light', primary: '#2196f3' }
        }
        hydrate('themeStore', themeStore, initialState).then(() => console.log('themeStore hydrated'))
        
        return () => {}
    })
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 992px)'
    })
   
    return (
        <Layout className={`${style.app} ${system.dark?style.dark:''}`}>
            {isDesktop && 
                <Sider collapsed={system.collapsed}>
                    <MenuWrapper routers={Routers}/>
                </Sider>
            }
            <Layout>
                <HeaderWrapper />
                <ContentWrapper routers={Routers}/>
                <DrawerWrapper />
            </Layout>
        </Layout>
    )
}))

export default withRouter(Index)