import React from 'react'
import { Helmet } from 'react-helmet'

import { Landing } from '../components/Layouts'

import Error from '../containers/Error'

const ErrorPage = () => (
    <Landing>
        <Helmet>
            <title>Error</title>
        </Helmet>
        <Error />
    </Landing>
)

export default ErrorPage