import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../Header'
import Footer from '../../Footer'

import { site } from '../../../../config'

const Default = ({
    children
}) => (
    <div>
        <Helmet>
            <title>{site.title}</title>
        </Helmet>
        <Header />
        <main>{children}</main>
        <Footer />
    </div>
)

export default Default
