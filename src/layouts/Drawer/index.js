import React from 'react'
import { Drawer, Row, Switch } from 'antd'
import { inject, observer } from 'mobx-react'
import style from './index.module.less'
import { CirclePicker } from 'react-color'


const DrawerWrapper = inject('system')(observer((props) =>{
    let {system} = props
    let primary = (color)=>{
        console.log(system)
        system.setPrimary(color.hex)
        window.less.modifyVars({'@primary-color': color.hex})
    }
    return (
        <>
            <div>
                <Drawer
                    title="设置"
                    width={380}
                    onClose={system.setDrawer}
                    visible={system.drawer}
                    bodyStyle={{ paddingBottom: 80 }}
                    className={`${style.drawer} ${system.dark?style.dark:''}`}
                >
                    <Row>
                        <div className={style.row}>
                            <div>切换模式</div>
                            <div><Switch defaultChecked onClick={()=>{ system.setDark()}} /></div>
                        </div>
                        <div className={style.row}>
                            <div>切换主题</div>
                            <div>
                                {/* ()=>{} */}
                                <CirclePicker color={system.primary} onChangeComplete={ primary }/>
                            </div>
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