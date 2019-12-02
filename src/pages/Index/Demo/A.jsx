import React, {useState, useEffect} from 'react';
import { inject, observer } from 'mobx-react'
import { Spin, Alert} from 'antd'
const A = inject('systemStore')(observer((props) =>{
    let {systemStore} = props
    let {loading, setLoading} = useState(true)
    let {count, setCount} = useState(0)
    useEffect(() => {
        console.log('effect')
    
        return () => {
            
        }
    })
    return (
        <Spin spinning={loading} tip="Loading...">
            <Alert
                message="Alert message title"
                description="Further details about the context of this alert."
                type="info"
            />
            <div>
                store: {systemStore.dark}
                <div onClick={()=>{ systemStore.setDark()}}>dsa</div>
                <div onClick={()=>{ systemStore.setCollapsed()}}>菜单收缩</div>
                <div>{systemStore.theme}</div>
            </div>
        </Spin>
    )
}))
export default A