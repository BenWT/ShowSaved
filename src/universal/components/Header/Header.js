import React from 'react'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'

import {
    site,
    topNav,
} from '../../../config'
import logo from './img/logo.svg'

// const {
//     site,
//     topNav,
// } = config

const Header = ({
    classes,
}) => (
    <div className={classes.header}>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <div className={classes.headerInner}>
                        <Link to="/">
                            <ReactSVG src={logo} alt={site.title} svgClassName={classes.logo} loading={() => (
                                <span className={classes.logoLoading}></span>
                            )} />
                        </Link>
                        <ul className={classes.nav}>
                            {topNav.map((item) => (
                                <li key={item.label} className={classes.navItem}>
                                    <Link to={item.to} className={classes.navLink}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default Header
