import React from 'react'
import Demo from '@library/routes/modules/Demo'
const A = React.lazy(() => import('@pages/Index/Demo/A'))
const B = React.lazy(() => import('@pages/Index/Demo/B'))

const Routers = [
    {
        path: '/index/a',
        title: 'Dashboard',
        icon: 'bar-chart',
        component: A
    },
    {
        path: '/index/b',
        title: 'Dashboard1',
        icon: 'bar-chart',
        component: B
    },
    {
        path: '/index/a',
        title: 'Demo',
        icon: 'bar-chart',
        routes: Demo
    },
    {
        path: '/index/a',
        title: 'Demo1',
        icon: 'bar-chart',
        routes: Demo
    }
]
export default Routers