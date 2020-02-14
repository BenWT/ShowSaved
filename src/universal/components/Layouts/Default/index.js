import { compose, lifecycle } from 'recompose';

import Default from './Default'

export default compose(
    lifecycle({
        componentDidMount() {
            window.scrollTo(0, 0)
        }
    })
)(Default)
