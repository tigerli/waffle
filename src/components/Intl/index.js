import React from 'react'
import { inject, observer } from 'mobx-react'
import { IntlProvider } from 'react-intl' /* react-intl imports */

import messages from '@library/locale'

const Intl = inject('system')(observer((props) =>{
    let {system} = props
    
    return (
        <>
            <IntlProvider locale={system.locale.split('_')[0]} messages={messages[system.locale]}>
                {props.children}
            </IntlProvider>
        </>
    )
}))

export default Intl