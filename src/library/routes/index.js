import React from 'react'
import Demo from '@library/routes/modules/Demo'
const A = React.lazy(() => import('@pages/Index/Demo/A'))

const basePath = '/home/'
const Routers = [
    {
        path: basePath+'dashboard',
        title: 'Dashboard',
        icon: 'bar-chart',
        component: A
    },
    {
        path: basePath+'demo',
        title: 'Demo',
        icon: 'bar-chart',
        children: Demo
    }
]

export default Routers