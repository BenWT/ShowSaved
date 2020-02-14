import { compose } from 'recompose'
import injectSheet from 'react-jss'

import Input from './Input'
import style from './style'

// const recomposeStates = compose(
//     withState('value', 'setValue', ''),
// )

export default compose(
    // recomposeStates,
    injectSheet(style)
)(Input)
