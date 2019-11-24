import React from 'react';
import './index.less'
import { inject, observer } from 'mobx-react'

const Layout = inject('systemStore')(observer((props) =>{
    let {systemStore} = props
    return (
        <div className={`layout ${systemStore.dark?'dark':''}`}>
            {props.children}
        </div>
    );
  }))


export default Layout;