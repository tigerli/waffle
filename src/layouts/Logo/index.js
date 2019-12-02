import React from 'react'
import { Icon } from 'antd'
import style from './index.module.less'
import { inject, observer } from 'mobx-react'

let Logo =  inject('systemStore')(observer((props) => {
    let {systemStore} = props
    return(
        <div className={style.logo}>
            {/* ${display?style.title:style.title_hidden} */}
            <div>
               dsa
            </div>
            <div onClick={()=>{systemStore.setCollapsed()}} className={`${style.icon}  ${systemStore.collapsed?style.icon_transition:''}`}>
                <Icon type="menu-unfold" />
            </div>
        </div>
    )
}))

export default Logo