import { compose } from 'recompose'
import injectSheet from 'react-jss'

import Footer from './Footer'
import style from './style'

export default compose(
    injectSheet(style)
)(Footer)