import React from 'react'
import Demo from '@library/routes/modules/Demo'
import Element from '@library/routes/modules/Element'

const Dashboard = React.lazy(() => import('@pages/Index/Dashboard'))
const Charts = React.lazy(() => import('@pages/Index/Charts'))

const basePath = '/home/'
const Routers = [
    {
        path: basePath+'dashboard',
        title: '仪表盘',
        icon: 'dashboard',
        component: Dashboard
    },
    {
        path: basePath+'charts',
        title: '图表',
        icon: 'pie-chart',
        component: Charts
    },
    {
        path: basePath+'demo',
        title: '测试',
        icon: 'bar-chart',
        children: Demo
    },
    {
        path: basePath+'element',
        title: '元素',
        icon: 'build',
        children: Element
    }


]

export default Routers