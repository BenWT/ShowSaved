import React from 'react'
import ReactDOM from 'react-dom/server'
import { StaticRouter } from 'react-router'
import { renderToString } from "react-dom/server"
import { JssProvider, SheetsRegistry } from 'react-jss'
import { Helmet } from 'react-helmet'
import { CookiesProvider } from 'react-cookie';

import Html from '../../universal/containers/Html'
import Root from '../../universal/containers/Root'

let bundle = []
if (process.env.NODE_ENV === 'production') {
    bundle = [ 
        // '/main.js', 
        // '/runtime~main.js', 
        // '/npm.core-js.js', 
        // '/npm.cssinjs-animations.js', 
        "/main.js",
        "/npm.core-js.js",
        "/npm.jss.js",
        "/runtime~main.js",
    ]
} else {
    bundle = [ 
        'http://localhost:3002/dist/main.js', 
        'http://localhost:3002/dist/runtime~main.js', 
    ]
}

export default (req, res, context) => {
    const sheets = new SheetsRegistry()

    const component = (
        <CookiesProvider cookies={req.universalCookies}>
            <StaticRouter location={req.url} context={context}>
                <JssProvider registry={sheets}>
                    <Root />
                </JssProvider>
            </StaticRouter>
        </CookiesProvider>
    )

    const content = renderToString(component)
    const helmet = Helmet.renderStatic()

    if (context.url !== undefined && content.url !== req.url) res.redirect(context.url)

    res.status((context.status) ? context.status : 200)

    const html = <Html bundle={bundle} content={content} sheets={sheets} helmet={helmet} />

    res.send(`<!doctype html>\n${ReactDOM.renderToStaticMarkup(html)}`)
    res.end()
}
