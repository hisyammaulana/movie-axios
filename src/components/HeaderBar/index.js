import React from 'react'
import PropTypes from 'prop-types'

import { HeaderBarContainer, Headertext } from './styled'

function HeaderBar({title}){
    return(
        <HeaderBarContainer>
            <Headertext>{title}</Headertext>
        </HeaderBarContainer>
    );
}

HeaderBar.propTypes = {
    title: PropTypes.string
};

HeaderBar.defaultProps = {
    title: 'My App'
}

export default HeaderBar;