import React from 'react'
import Demo from '@library/routes/modules/Demo'
const Dashboard = React.lazy(() => import('@pages/Index/Dashboard'))

const basePath = '/home/'
const Routers = [
    {
        path: basePath+'dashboard',
        title: 'Dashboard',
        icon: 'bar-chart',
        component: Dashboard
    },
    {
        path: basePath+'demo',
        title: 'Demo',
        icon: 'bar-chart',
        children: Demo
    }
]

export default Routers