import React from 'react'
import injectSheet from 'react-jss'

import style from './style'

const ErrorScreen = ({
    classes,
}) => (
    <div className={classes.error}>
        <div className="container">
            <div className="row tac">
                <div className="col-xs-12">
                    <h1 className={classes.title}>Oops, nothing to see here...</h1>
                    <p>No, really, absolutely nothing!</p>
                </div>
            </div>
        </div>
    </div>
)

export default injectSheet(style)(ErrorScreen)
