import React from 'react'
import { Drawer, Button, Icon } from 'antd'
import { inject, observer } from 'mobx-react'


const DrawerWrapper = inject('systemStore')(observer((props) =>{
    let {systemStore} = props

    return (
        <>
            <div>
                <Button type="primary" onClick={systemStore.setDrawer}>
                    <Icon type="plus" /> New account
                </Button>
                <Drawer
                    title="Create a new account"
                    width={720}
                    onClose={systemStore.setDrawer}
                    visible={systemStore.drawer}
                    bodyStyle={{ paddingBottom: 80 }}
                >
                
                </Drawer>
            </div>
        </>
    )
}))

export default DrawerWrapper