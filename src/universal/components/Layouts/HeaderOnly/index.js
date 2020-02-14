import { compose, lifecycle } from 'recompose';

import HeaderOnly from './HeaderOnly'

export default compose(
    lifecycle({
        componentDidMount() {
            window.scrollTo(0, 0)
        }
    })
)(HeaderOnly)
