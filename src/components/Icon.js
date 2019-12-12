import React from 'react'
import T from 'prop-types'

import { IconConfig } from '../helpers/iconsConfig'

export const Icon = ({name, ...props}) => {
    const IconC = IconConfig[name];
    return <IconC {...props}/>
}

Icon.propTypes = {
    name: T.string.isRequired,
    size: T.string,
    color: T.string
}

Icon.defaultProps = {
    size: '14px',
    color: '#000'
}