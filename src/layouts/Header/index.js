import React from 'react'
import { AlignLeftOutlined, BellOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Icon as LegacyIcon } from '@ant-design/compatible';
import { Layout, Badge, Avatar, Popover } from 'antd';
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
            <div onClick={onClickLogout}><LogoutOutlined /><span>退出</span></div>
        </div>
    )
    const messagePopover = (
        <div className={style.messagePopover}>
            <div>ss</div>
        </div>
    )
    return <>
        <Header>
            {
                isMobile ? 
                    <>dsa</>
                    :
                    <div className={style.header}>
                        <div>
                            <LegacyIcon type={system.collapsed?'menu-unfold':'menu-fold'} className={style.menu_icon} onClick={()=>{system.setCollapsed()}} />
                        </div>
                        <div>
                            <div>
                                {/* <AutoComplete
                                    className="certain-category-search"
                                    dropdownClassName="certain-category-search-dropdown"
                                    dropdownMatchSelectWidth={false}
                                    dropdownStyle={{ width: 300 }}
                                    size="large"
                                    style={{ width: '100%' }}
                                    placeholder="input here"
                                    optionLabelProp="value"
                                >
                                    <Input suffix={<Icon type="search" className={`${style.icon}`} />} />
                                </AutoComplete> */}
                            </div>
                            
                            <div>
                                <Badge dot>
                                    <Popover placement="bottomRight" content={messagePopover}>
                                        <BellOutlined className={style.icon} />
                                    </Popover>
                                </Badge>
                            </div>
                            
                            <div>
                                <Popover className={`${style.pointer}`} placement="bottomRight" content={userPopover}>
                                    <Badge dot>
                                        <Avatar icon={<UserOutlined />} src={user.info.get('avatar')}/>
                                    </Badge>
                                </Popover>
                            </div>
                            
                            <div>
                                <AlignLeftOutlined className={style.icon} onClick={()=>{system.setDrawer()}} />
                            </div>
                            
                        </div>
                    </div>
            }
        </Header>
    </>;
}))

export default HeaderWrapper