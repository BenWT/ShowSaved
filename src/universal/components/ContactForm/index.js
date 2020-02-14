import { compose, withState, withHandlers, branch, renderComponent } from 'recompose'
import injectSheet from 'react-jss'
import sendgrid from '@sendgrid/mail'

import ContactForm from './ContactForm'
import Success from './Success'
import style from './style'

sendgrid.setApiKey(process.env.SENDGRID_API_KEY)

const recomposeStates = compose(
    withState('name', 'setName', ''),
    withState('email', 'setEmail', ''),
    withState('message', 'setMessage', ''),
    withState('hp', 'setHP', ''),
    withState('tried', 'setTried', false),
    withState('validEmail', 'setValidEmail', false),
    withState('submitted', 'setSubmitted', false),
)

const validateEmail = (email) => {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
}

const recomposeHandlers = withHandlers({
    onSubmit: ({ name, email, message, hp, setValidEmail, setSubmitted, setTried }) => (e) => {
        e.preventDefault()

        setTried(true)
        setValidEmail(validateEmail(email))

        if (
            name.length > 0 &&
            message.length > 0 &&
            validateEmail(email) &&
            hp.length === 0
        ) {
            fetch('/contact', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    email,
                    message,
                })
            })

            setSubmitted(true)
        }
    }
})

export default compose(
    recomposeStates,
    recomposeHandlers,
    injectSheet(style),
    branch(
        ({ submitted }) => submitted,
        renderComponent(Success),
        renderComponent(ContactForm),
    )
)(ContactForm)
