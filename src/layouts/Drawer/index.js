import React from 'react'
import { Drawer, Row, Switch } from 'antd'
import { inject, observer } from 'mobx-react'
import style from './index.module.less'
import { CirclePicker } from 'react-color'
import Languages from '@components/Languages'

const DrawerWrapper = inject('system')(observer((props) =>{
    let {system} = props
    let primary = (color)=>{
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
                            <div>模式</div>
                            <div><Switch defaultChecked onClick={()=>{ system.setDark()}} /></div>
                        </div>
                        <div className={style.row}>
                            <div>主题</div>
                            <div>
                                <CirclePicker color={system.primary} onChangeComplete={ primary }/>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div>语言</div>
                            <div>
                                <Languages />
                            </div>
                        </div>
                    </Row>
                </Drawer>
            </div>
        </>
    )
}))

export default DrawerWrapper