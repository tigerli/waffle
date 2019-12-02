import React, { useState, useEffect} from 'react'
import { inject, observer } from 'mobx-react'
import { Spin, Alert} from 'antd'
import { get} from '@req/index'

const A = inject('systemStore')(observer((props) =>{
    let {systemStore} = props
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({ hits: [] })

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
    
            const result = await get('/api/v1/search?query=redux')
            console.log(result)
            setData(result.data)
            setLoading(false)
        }
        fetchData()
    }, [])

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
            {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
            ))}
        </Spin>
    )
}))
export default A