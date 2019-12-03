import React, { useState, useEffect} from 'react'
import { inject, observer } from 'mobx-react'
import { Spin} from 'antd'
const A = inject('systemStore')(observer((props) =>{
    let {systemStore} = props
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
        return () => {}
    }, [])

    return (
        <Spin spinning={loading} tip="Loading...">
            <div className='container'>
                store: {systemStore.dark}
                <div onClick={()=>{ systemStore.setDark()}}>dsa</div>
                <div onClick={()=>{ systemStore.setCollapsed()}}>菜单收缩</div>
                <div>{systemStore.theme}</div>
            </div>
        </Spin>
    )
}))
export default A