import React from 'react'
import Demo from '@library/routes/modules/Demo'
const A = React.lazy(() => import('@pages/Index/Demo/A'))
const B = React.lazy(() => import('@pages/Index/Demo/B'))
const basePath = '/index'
const Routers = [
    {
        path: basePath,
        breadcrumbName: 'Dashboard',
        title: 'Dashboard',
        icon: 'bar-chart',
        component: A
    },
    {
        path: basePath,
        breadcrumbName: 'Dashboard',
        title: 'Dashboard1',
        icon: 'bar-chart',
        component: B
    },
    {
        path: basePath,
        breadcrumbName: 'Dashboard',
        title: 'Demo',
        icon: 'bar-chart',
        children: Demo
    },
    {
        path: basePath,
        breadcrumbName: 'Dashboard',
        title: 'Demo1',
        icon: 'bar-chart',
        children: Demo
    }
]
export default Routers