import { compose } from 'recompose'
import injectSheet from 'react-jss'

import Anchor from './Anchor'
import style from './style'

// compose handler

export default compose(
    injectSheet(style)
)(Anchor)