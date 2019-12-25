import React from 'react'
import Demo from '@library/routes/modules/Demo'
import Element from '@library/routes/modules/Element'

const Dashboard = React.lazy(() => import('@pages/Index/Dashboard'))
const Charts = React.lazy(() => import('@pages/Index/Charts'))

const basePath = '/home/'
const Routers = [
    {
        path: basePath+'dashboard',
        title: 'Dashboard',
        icon: 'bar-chart',
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
        title: 'Demo',
        icon: 'bar-chart',
        children: Demo
    },
    {
        path: basePath+'element',
        title: 'element',
        icon: 'build',
        children: Element
    }


]

export default Routers