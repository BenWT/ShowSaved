import email from './email'
import saved from './saved'

export default (app) => { 
    email(app)
    saved(app)
}