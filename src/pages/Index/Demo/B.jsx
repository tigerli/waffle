import React, { useState, useEffect } from 'react'
import { Spin} from 'antd'
function B() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 12000)
        return () => {}
    }, [])
    return (
        <Spin spinning={loading} tip="Loading...">
            <div>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
                <p>ds</p>
            </div>
        </Spin>
        
    )
}

export default B