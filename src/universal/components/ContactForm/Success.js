import React from 'react'
import cx from 'classnames'

const Success = ({
    classes,
    showSidebar = true,
}) => (
    <div className={classes.contactForm}>
        <div className="container">
            <div className="row justify-center">
                {showSidebar &&
                    <div className="col-xs-4">
                        <h2 className={classes.title}>Let's Talk</h2>
                    </div>
                }
                <div className={cx("col-xs-8", classes.success)}>
                    <p>Thanks for getting into contact with us, we'll get back to you when we can.</p>
                </div>
            </div>
        </div>
    </div>
)


export default Success
