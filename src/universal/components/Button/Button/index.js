import { compose } from 'recompose'
import injectSheet from 'react-jss'

import Button from './Button'
import style from './style'

// compose handler

export default compose(
    injectSheet(style)
)(Button)