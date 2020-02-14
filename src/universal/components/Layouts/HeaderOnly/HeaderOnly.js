import React from 'react'
import { Helmet } from 'react-helmet'

import Header from '../../Header'

import { site } from '../../../../config'

const HeaderOnly = ({
    children
}) => (
    <div>
        <Helmet>
            <title>{site.title}</title>
        </Helmet>
        <Header />
        <main>{children}</main>
    </div>
)

export default HeaderOnly