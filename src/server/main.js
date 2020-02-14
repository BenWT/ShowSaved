import express from 'express'
import http from 'http'
import forceDomain from 'forcedomain'
import cookiesMiddleware from 'universal-cookie-express'

import routes from './routes'
import middleware from './middleware'
import { render } from './services'

const PORT = process.env.PORT || 3000

const start = () => {
    const app = express()

    // app.use(forceDomain({
    //     hostname: process.env.HOSTNAME,
    // }))

    app.use(cookiesMiddleware())
    
    middleware(app)
    routes(app)

    app.use((req, res) => {
        const context = { }
        // const client = connect({ req, res, db })

        render(req, res, context)
    })

    return http.createServer(app)
}

const server = start()

export default server.listen(PORT, () => {
    console.log(`Application is running on http://localhost:${PORT}/`)
})