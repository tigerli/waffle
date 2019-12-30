import React from 'react'

const Accordion = React.lazy(() => import('@pages/Index/Elements/Accordion'))
const Paginations = React.lazy(() => import('@pages/Index/Elements/Paginations'))
const DatePickers = React.lazy(() => import('@pages/Index/Elements/DatePickers'))
const Icons = React.lazy(() => import('@pages/Index/Elements/Icons'))

const Demo = [
    {
        path: '/accordion',
        title: '手风琴',
        icon: 'pic-center',
        component: Accordion
    },
    {
        path: '/paginations',
        title: '页码',
        icon: 'pic-center',
        component: Paginations
    },
    {
        path: '/datePickers',
        title: '日期选择框',
        icon: 'calendar',
        component: DatePickers
    },
    {
        path: '/icons',
        title: '图标',
        icon: 'smile',
        component: Icons
    }
]
export default Demo