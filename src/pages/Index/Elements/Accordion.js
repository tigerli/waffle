import React, { useEffect, useState } from 'react'
import { Spin } from 'antd'
import { FormattedMessage } from 'react-intl' /* react-intl imports */

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
                <FormattedMessage id="hello"/>
            </div>
        </Spin>
    )
}
export default Accordion