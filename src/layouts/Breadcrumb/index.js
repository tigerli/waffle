import React from 'react'
import { useLocation } from 'react-router-dom'
import { Breadcrumb } from 'antd'
const BreadcrumbWrapper = () =>{
    let location = useLocation()
    let pathname = location.pathname.split('/')
    return (
        <>
            <Breadcrumb>
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
        </>
    )
}

export default BreadcrumbWrapper