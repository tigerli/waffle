import React from 'react'
import { Drawer, Row, Switch } from 'antd'
import { inject, observer } from 'mobx-react'
import style from './index.module.less'
import { CirclePicker } from 'react-color'
import { modifyVars } from '@library/utils/modifyVars'
import Languages from '@components/Languages'
import { FormattedMessage as Message } from 'react-intl' 

const DrawerWrapper = inject('system', 'themeStore')(observer((props) =>{
    let {system, themeStore} = props
    let primary = (color)=>{
        themeStore.setPrimary(color.hex)
        modifyVars(themeStore.dark, color.hex)
        // modifyVars({'@primary-color': color.hex})
    }
    let dark = ()=>{
        themeStore.setDark()
        modifyVars(themeStore.dark, themeStore.primary)
    }
    return (
        <>
            <div>
                <Drawer
                    title={<Message id='setting'/>}
                    width={380}
                    onClose={system.setDrawer}
                    visible={system.drawer}
                    bodyStyle={{ paddingBottom: 80 }}
                    className={`${style.drawer} ${themeStore.dark?style.dark:''}`}
                >
                    <Row>
                        <div className={style.row}>
                            <div><Message id='model'/></div>
                            {/*  */}
                            <div><Switch defaultChecked onClick={ dark } /></div>
                        </div>
                        <div className={style.row}>
                            <div><Message id='themes'/></div>
                            <div>
                                {/*  */}
                                <CirclePicker color={themeStore.primary} onChangeComplete={ primary }/>
                            </div>
                        </div>
                        <div className={style.row}>
                            <div><Message id='languages'/></div>
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