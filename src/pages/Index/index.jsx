import React, {useState, useEffect} from 'react'
import { withRouter, useHistory} from 'react-router-dom'
import { Layout} from 'antd'
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

const { Sider } = Layout

let Index = inject('system')(observer((props) => {
    const [routers, setRouters] = useState([])
    let history = useHistory()
    // const isMobile = useMediaQuery({
    //     query: '(max-device-width: 991px)'
    // })
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 992px)'
    })
    
    useEffect( () => {
        if(isEmpty(getToken())){
            history.push('/login')
        }else{
            Routers.map((route) => {
                if(!isEmpty(route.children)){
                    route.children.map((r) => {
                        if(r.path.split('/').length === 2){
                            r.path = route.path+r.path
                        }
                        return ''
                    })
                }
                return ''
            })
            setRouters(Routers)
        }
        return ()=>{
            setRouters([])
        }
    }, [routers, history])

    let {system} = props
    return (
        <Layout className={`${style.app} ${system.dark?style.dark:''}`}>
            {isDesktop && 
                <Sider collapsed={system.collapsed}>
                    <MenuWrapper routers={routers}/>
                </Sider>
            }
            <Layout>
                <HeaderWrapper />
                <ContentWrapper routers={routers}/>
                <DrawerWrapper />
            </Layout>
        </Layout>
    )
}))

export default withRouter(Index)