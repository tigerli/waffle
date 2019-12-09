import React from 'react'
import { Drawer, Row, Switch } from 'antd'
import { inject, observer } from 'mobx-react'
import style from './index.module.less'

const DrawerWrapper = inject('store')(observer((props) =>{
    let {store} = props

    return (
        <>
            <div>
                <Drawer
                    title="设置"
                    width={380}
                    onClose={store.setDrawer}
                    visible={store.drawer}
                    bodyStyle={{ paddingBottom: 80 }}
                    className={style.drawer}
                >
                    <Row>
                        <div className={style.column}>
                            <div className={style.title}>主题</div>
                            <div><Switch defaultChecked /></div>
                        </div>
                        <div className={style.row}>
                            <div>切换模式</div>
                            <div><Switch defaultChecked onClick={()=>{ store.setDark()}} /></div>
                        </div>
                        
                        {/* <Col span={24} className={style.title}>主题</Col>
                        <Col span={24}>
                            s
                        </Col>
                        <Row>
                            <Col span={12}><span>切换模式</span> </Col>
                            <Col span={12} push={8}><Switch defaultChecked /></Col>
                        </Row> */}
                    </Row>
                </Drawer>
            </div>
        </>
    )
}))

export default DrawerWrapper