import React from 'react'
import { hydrate } from 'react-dom'
import { Router } from 'react-router-dom'
import { CookiesProvider } from 'react-cookie';

import history from '../universal/history'
import Root from '../universal/containers/Root'

// TODO: wrap in cookie provider

const start = () => {
    hydrate(
        <CookiesProvider>
            <Router history={history}>
                <Root />
            </Router>
        </CookiesProvider>,
        document.getElementById('content')
    )
}

start()
