import React from 'react'

const Accordion = React.lazy(() => import('@pages/Index/Elements/Accordion'))

const Demo = [
    {
        path: '/Accordion',
        title: '手风琴',
        icon: 'pic-center',
        component: Accordion
    }
]
export default Demo