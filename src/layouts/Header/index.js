import React from 'react'
import { Layout } from 'antd'
import { inject, observer } from 'mobx-react'
import { useMediaQuery } from 'react-responsive'
const { Header } = Layout

const HeaderWrapper = inject('systemStore')(observer((props) =>{
    let {systemStore} = props
    const isMobile = useMediaQuery({
        query: '(max-device-width: 991px)'
    })
    return (
        <>
            <Header>
                {isMobile && <>dsa</>}
                {systemStore.dark}
            </Header>
        </>
    )
}))

export default HeaderWrapper