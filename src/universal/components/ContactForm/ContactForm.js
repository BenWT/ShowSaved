import React from 'react'
import cx from 'classnames'

import { Form, Input, Textarea } from '../../components/Fields'
import { Button } from '../../components/Button'

const ContactForm = ({
    classes,
    hp,
    setHP,
    name,
    setName,
    email,
    setEmail,
    message,
    setMessage,
    onSubmit,
    showSidebar = true,
    validEmail,
    tried,
}) => (
    <div className={classes.contactForm}>
        <div className="container">
            <div className="row justify-center">
                {showSidebar &&
                    <div className="col-xs-12 col-sm-4">
                        <h2 className={classes.title}>Let's Talk</h2>
                    </div>
                }
                <div className="col-xs-12 col-sm-8">
                    <Form handler={onSubmit}>
                        <Input 
                            name="name" 
                            type="text" 
                            placeholder="What's your name?" 
                            value={name} 
                            handler={setName}
                            className={cx({
                                [classes.input]: true,
                                [classes.error]: tried && name.length === 0,
                            })}
                        />
                        {tried && name.length === 0 && (
                            <p className={classes.errorMessage}>Don't be shy!</p>
                        )}
                        <Input 
                            name="email" 
                            type="text" 
                            placeholder="And your email?" 
                            value={email} 
                            handler={setEmail}
                            className={cx({
                                [classes.input]: true,
                                [classes.error]: tried && !validEmail,
                            })}
                        />
                        {tried && !validEmail && (
                            <p className={classes.errorMessage}>There's something wrong with your email!</p>
                        )}
                        <Textarea 
                            name="message" 
                            placeholder="Tell us about your project" 
                            value={message} 
                            handler={setMessage}
                            className={cx({
                                [classes.input]: true,
                                [classes.error]: tried && message.length === 0,
                            })}
                        />
                        {tried && message.length === 0 && (
                            <p className={classes.errorMessage}>We need a little more information...</p>
                        )}
                        <Input 
                            name="name" 
                            type="hidden"
                            value={hp} 
                            handler={setHP}
                            className={cx({
                                [classes.hp]: true,
                            })}
                        />
                        <Button
                            type="submit"
                            className={cx({
                                [classes.input]: true,
                            })}
                        >
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    </div>
)

export default ContactForm
