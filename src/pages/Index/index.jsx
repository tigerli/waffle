import React, {Suspense} from 'react'
import { withRouter, useHistory, Route} from 'react-router-dom'
import { Layout} from 'antd'
import { useMediaQuery } from 'react-responsive'
import style from './index.module.less'
import { inject, observer } from 'mobx-react'
import MenuWrapper from '@layouts/Menu'
import HeaderWrapper from '@layouts/Header'
import { getToken } from '@utils/auth'
import { isEmpty } from '@library/utils/validate'
const A = React.lazy(() => import('@pages/Index/Demo/A'))
const B = React.lazy(() => import('@pages/Index/Demo/B'))

const { Sider, Content } = Layout

let Index = inject('systemStore')(observer((props) => {
    // const isMobile = useMediaQuery({
    //     query: '(max-device-width: 991px)'
    // })
    const isDesktop = useMediaQuery({
        query: '(min-device-width: 992px)'
    })

    let history = useHistory()
    if(isEmpty(getToken())){
        history.push('/login')
    }

    let {systemStore} = props
    return (
        <Layout className={`${style.app} ${systemStore.dark?style.dark:''}`}>
            {isDesktop && 
                <Sider collapsed={systemStore.collapsed}>
                    <MenuWrapper />
                </Sider>
            }
        
            <Layout>
                <HeaderWrapper />
                <Content>
                    <Suspense fallback={<div>loading...</div>}>
                        <Route path="/index/a" component={A} />
                        <Route path="/index/b" component={B} />
                    </Suspense>
                </Content>
            </Layout>
        </Layout>
    )
}))


export default withRouter(Index)