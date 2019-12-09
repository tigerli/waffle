import React from 'react'
import { Layout, Icon, Badge, Avatar } from 'antd'
import { inject, observer } from 'mobx-react'
import { useMediaQuery } from 'react-responsive'
import style from './index.module.less'
const { Header } = Layout

const HeaderWrapper = inject('store')(observer((props) =>{
    let {store} = props
    const isMobile = useMediaQuery({
        query: '(max-device-width: 991px)'
    })
    return (
        <>
            <Header>
                {
                    isMobile ? 
                        <>dsa</>
                        :
                        <div className={style.header}>
                            <div>
                                <Icon type={store.collapsed?'menu-unfold':'menu-fold'} className={style.menu_icon} onClick={()=>{store.setCollapsed()}} />
                            </div>
                            <div>
                                <Icon type="search" className={style.icon} />
                                <Icon type="bell" className={style.icon} />
                                <Badge dot>
                                    <Avatar icon="user" />
                                </Badge>
                                <Icon type="align-left" className={style.icon} onClick={()=>{store.setDrawer()}} />
                            </div>
                        </div>
                }
            </Header>
        </>
    )
}))

export default HeaderWrapper