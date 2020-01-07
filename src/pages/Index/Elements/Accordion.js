import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'

function Accordion() {
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(false)
        return () => {}
    }, [])

    return (
        <Spin spinning={loading} tip="Loading...">
            <div className='container'>
                Accordion

            </div>
        </Spin>
    )
}
export default Accordion