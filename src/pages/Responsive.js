import React from 'react'
import Responsive from 'react-responsive'

const Desktop = props => <Responsive {...props} minWidth={768} />
const Mobile = props => <Responsive {...props} maxWidth={767} />
export {
    Desktop,
    Mobile
}
