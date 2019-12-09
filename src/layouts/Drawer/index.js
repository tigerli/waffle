import React from 'react'
import { Drawer, Button, Icon, Row, Col } from 'antd'
import { inject, observer } from 'mobx-react'


const DrawerWrapper = inject('store')(observer((props) =>{
    let {store} = props

    return (
        <>
            <div>
                <Drawer
                    title="设置"
                    width={720}
                    onClose={store.setDrawer}
                    visible={store.drawer}
                    bodyStyle={{ paddingBottom: 80 }}
                >
                    
                </Drawer>
            </div>
        </>
    )
}))

export default DrawerWrapper