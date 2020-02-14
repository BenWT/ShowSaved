import { compose, withState } from 'recompose'
import injectSheet from 'react-jss'

import Textarea from './Textarea'
import style from './style'

// const recomposeStates = compose(
    // withState('value', 'setValue', ''),
// )

export default compose(
    // recomposeStates,
    injectSheet(style)
)(Textarea)
