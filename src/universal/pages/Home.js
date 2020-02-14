import React from 'react'
import { Helmet } from 'react-helmet'

import { Landing } from '../components/Layouts'

import Home from '../containers/Home'

import { site } from '../../config'

const HomePage = () => (
    <Landing>
        <Helmet>
            <title>{site.title}</title>
        </Helmet>
        <Home />
    </Landing>
)

export default HomePage