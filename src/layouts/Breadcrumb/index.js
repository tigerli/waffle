import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
import style from './index.module.less'
import { inject, observer } from 'mobx-react'

const BreadcrumbWrapper = inject('system')(observer((props) =>{
    let {system} = props
    let location = useLocation()
    let pathname = location.pathname.split('/')
    return (
        <>
            <div className={`${style.breadcrumb} ${system.dark?style.dark:''}`}>
                <div>{pathname[pathname.length-1]}</div>
                <Breadcrumb separator=">">
                    {
                        pathname.map((item, key)=>{
                            if(item.length > 0){
                                return (
                                    <Breadcrumb.Item key={key}>{item}</Breadcrumb.Item>
                                )
                            }
                            return ''
                        })
                    }
                </Breadcrumb>
            </div>
        </>
    )
}))

export default BreadcrumbWrapper