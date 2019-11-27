import React from 'react';
import { Layout as BasicLayout} from 'antd';
import style from './index.module.less'
import { inject, observer } from 'mobx-react'

const Layout = inject('systemStore')(observer((props) =>{
    console.log(style)
    let {systemStore} = props
    return (
        <BasicLayout className={`${systemStore.dark?style.dark:''}`}>
            {props.children}
        </BasicLayout>
    );
  }))


export default Layout;