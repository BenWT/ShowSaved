import React from 'react'
import { Helmet } from 'react-helmet'

import { site } from '../../../../config'

const Landing = ({
    children
}) => (
    <div>
        <Helmet>
            <title>{site.title}</title>
        </Helmet>
        <main>{children}</main>
    </div>
)

export default Landing