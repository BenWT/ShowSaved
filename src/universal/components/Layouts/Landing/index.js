import { compose, lifecycle } from 'recompose';

import Landing from './Landing'

export default compose(
    lifecycle({
        componentDidMount() {
            window.scrollTo(0, 0)
        }
    })
)(Landing)
