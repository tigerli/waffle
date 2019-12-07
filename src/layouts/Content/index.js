import React, {Suspense, useState} from 'react'
import { Layout, BackTop} from 'antd'
import BreadcrumbWrapper from '@layouts/Breadcrumb'
import { Route } from 'react-router-dom'
import { isEmpty } from '@library/utils/validate'
const { Content } = Layout
// import {
//     TransitionGroup,
//     CSSTransition
//   } from "react-transition-group";
function ContentWrapper(porps){
    let { routers } = porps
    let [routeItem] = useState([])
    routers.map((route) => {
        if(!isEmpty(route.children)){
            route.children.map((r) => {
                routeItem.push(r)
                return ''
            })
        }else{
            routeItem.push(route)
        }
        return ''
    })
    return(
        <>
            <Content>
                <BreadcrumbWrapper />
                <Suspense fallback={<div>loading...</div>}>
                    {
                        routeItem.map((route, key) => {
                            return(
                                <Route key={`${key}`} path={route.path} component={route.component}/>
                            )
                        })
                    }
                    {/* <Route path="/home/*" component={Error404} /> */}
                </Suspense>
                <BackTop />
            </Content>
        </>
    )
}

export default ContentWrapper