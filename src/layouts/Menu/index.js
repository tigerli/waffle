import React, { useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'
import {  Menu, Icon } from 'antd'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { isEmpty } from '@library/utils/validate'
const { SubMenu } = Menu

const MenuWrapper = inject('store')(observer((props) =>{
    let {store, routers} = props
    let location = useLocation()
    let [subItem, setSubItem] = useState()
    useMemo(() => {
        setSubItem(location.pathname.split('/').slice(0, 3).join('/'))
    }, [location])

    useMemo(() => {
        return routers
    }, [routers])
    return (
        <>
            <div style={{flex:'0 0 200px', height:'64px'}}>
                {/* <Icon type="pie-chart" />
                <span>Login</span> */}
            </div>
            <Menu 
                mode={`${store.mode}`} 
                theme={`${store.theme}`}
                selectedKeys={[location.pathname]}
                openKeys={[subItem]}
                onOpenChange={(openKeys)=>{ setSubItem(openKeys[1])}}
                forceSubMenuRender={true}
            >
                {   
                    routers.map((route) => {
                        if(isEmpty(route.children)){
                            return (
                                <Menu.Item key={`${route.path}`}>
                                    <Link to={route.path}>
                                        <Icon type={route.icon}/>
                                        <span>{route.title}</span>
                                    </Link>
                                </Menu.Item>
                            )
                        }else{
                            let items = []
                            route.children.map((r) => {
                                items.push(
                                    <Menu.Item key={r.path}>
                                        <Link to={r.path}>
                                            {
                                                isEmpty(r.icon)?'':<Icon type={r.icon}/>
                                            }
                                            <span>{r.title}</span>
                                        </Link>
                                    </Menu.Item>
                                )
                                return ''
                            })
                            return (
                                <SubMenu key={`${route.path}`} title={
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