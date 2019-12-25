import React from 'react'
import { Layout, Icon, Badge, Avatar, Popover } from 'antd'
import { useHistory } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { useMediaQuery } from 'react-responsive'
import { removeToken } from '@utils/auth'
import style from './index.module.less'
const { Header } = Layout

const HeaderWrapper = inject('system', 'user')(observer((props) =>{
    let history = useHistory()
    let {system, user} = props

    const isMobile = useMediaQuery({
        query: '(max-device-width: 991px)'
    })

    const onClickLogout = ()=>{
        removeToken()
        history.push('/login')
    }
    const userPopover = (
        <div className={style.userPopover}>
            <div onClick={onClickLogout}><Icon type="logout" /><span>退出</span></div>
        </div>
    )
    return (
        <>
            <Header>
                {
                    isMobile ? 
                        <>dsa</>
                        :
                        <div className={style.header}>
                            <div>
                                <Icon type={system.collapsed?'menu-unfold':'menu-fold'} className={style.menu_icon} onClick={()=>{system.setCollapsed()}} />
                            </div>
                            <div>
                                <div>
                                    <Icon type="search" className={style.icon} />
                                </div>
                                <div>
                                    <Badge dot>
                                        <Icon type="bell" className={style.icon} />
                                    </Badge>
                                </div>
                                
                                <div>
                                    <Popover className={`${style.pointer}`} placement="bottomRight" content={userPopover}>
                                        <Badge dot>
                                            <Avatar icon="user" src={user.info.get('avatar')}/>
                                        </Badge>
                                    </Popover>
                                </div>
                                <div>
                                    <Icon type="align-left" className={style.icon} onClick={()=>{system.setDrawer()}} />
                                </div>
                                
                            </div>
                        </div>
                }
            </Header>
        </>
    )
}))

export default HeaderWrapper