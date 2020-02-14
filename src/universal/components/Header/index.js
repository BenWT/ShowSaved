import { compose } from 'recompose'
import injectSheet from 'react-jss'

import Header from './Header'
import style from './style'

export default compose(
    injectSheet(style)
)(Header)