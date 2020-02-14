import express from 'express'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser' 
import proxy from 'http-proxy-middleware'
import path from 'path'
import manifest from 'express-manifest'

export default (app) => {
    app.use('/', express.static('public'))
    
    if (process.env.NODE_ENV === 'production') {
        app.use('/', express.static('dist'))

        app.use(manifest({
            manifest: path.join(process.cwd(), 'dist') + '/asset-manifest.json',
            prepend: path.join(process.cwd(), 'dist'),
            reqPathFind: /^(\/?)/,
            reqPathReplace: '',
            debug: true
        }))
    } else {
        app.use('/dist', proxy({ target: 'http://localhost:3002' }));
    }
    
    app.use(bodyParser.json())
    app.use(cookieParser())
}