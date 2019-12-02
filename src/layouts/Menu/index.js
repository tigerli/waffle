import React from 'react';
import {  Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import Routers from '@library/routes'

import { inject, observer } from 'mobx-react'
import { isEmpty } from '@library/utils/validate'
const { SubMenu } = Menu

const MenuWrapper = inject('systemStore')(observer((props) =>{
    let {systemStore} = props
    let index = 0
    return (
        <>
            <div style={{flex:'0 0 200px', height:'64px'}}>
                {/* <Icon type="pie-chart" />
                <span>Login</span> */}
            </div>
            <Menu 
                mode={`${systemStore.mode}`} 
                theme={`${systemStore.theme}`} 
            >
                {   
                
                    Routers.map((route, _) => {
                        ++index
                        if(isEmpty(route.routes)){
                            return (
                                <Menu.Item key={`${index}`}>
                                    <Link to={route.path}>
                                        <Icon type={route.icon}/>
                                        <span>{route.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        }else{
                            let items = []
                            route.routes.map((r) => {
                                ++index
                                items.push(
                                    <Menu.Item key={index}>
                                        <Link to={r.path}>
                                            {
                                                isEmpty(r.icon)?'':<Icon type={r.icon}/>
                                            }
                                            <span>{r.title}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                                return index
                            })
                            return (
                                <SubMenu key={`sub${index}`} title={
                                    <span>
                                        <Icon type={route.icon} />
                                        <span>{route.title}</span>
                                    </span>
                                }>
                                    {items}
                                </SubMenu>
                            )
                        }
                        
                    })
                }
            </Menu>
        </>
    )
}))

export default MenuWrapper