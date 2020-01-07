import React from 'react'
import Element from '@library/routes/modules/Element'

const Dashboard = React.lazy(() => import('@pages/Index/Dashboard'))
const Charts = React.lazy(() => import('@pages/Index/Charts'))

const basePath = '/home/'
const Routers = [
    {
        path: basePath+'dashboard',
        title: 'dashboard',
        icon: 'dashboard',
        component: Dashboard
    },
    {
        path: basePath+'charts',
        title: 'chart',
        icon: 'pie-chart',
        component: Charts
    },
    {
        path: basePath+'element',
        title: 'element',
        icon: 'build',
        children: Element
    }
]

export default Routers