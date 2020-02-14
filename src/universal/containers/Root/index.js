import React from 'react'
import { Route, Switch } from 'react-router'
import injectSheet from 'react-jss'

import {
    Home,
    Error,
} from '../../pages'
import style from './style'

const Root = ({
    classes,
}) => (
    <Switch>
        <Route exact path='/' render={() => <Home />} />
        <Route path='*' render={
            ({ staticContext = {} }) => {
                staticContext.status = 404;
                return <Error />;
            }
        } />
    </Switch>
)

export default injectSheet(style)(Root);