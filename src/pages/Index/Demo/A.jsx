import React, { useState, useEffect} from 'react'
import { inject, observer } from 'mobx-react'
import { Spin } from 'antd'
const A = inject('store')(observer((props) =>{
    let {store} = props
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        return () => {}
    }, [])

    return (
        <Spin spinning={loading} tip="Loading...">
            <div className='container'>
                store:
            </div>
        </Spin>
    )
}))
export default A