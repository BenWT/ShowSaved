import React from 'react'
import injectSheet from 'react-jss'
import { Link } from 'react-router-dom'
import ReactSVG from 'react-svg'

import cwdfooter from './img/footer.svg'
import linkedin from './img/linkedin-brands.svg'
import style from './style'

import { site, bottomNav } from '../../../config'

const Footer = ({
    classes,
}) => (
    <div className={classes.footer}>
        <div className="container">
            <div className="row spread-items align-middle">
                <div className="col-xs-8">
                    <div className={classes.footerLeft}>
                        <Link to='/'><ReactSVG src={cwdfooter} svgClassName={classes.logo} /></Link>
                        <ul className={classes.nav}>
                            {bottomNav.map((item) => (
                                <li key={item.label} className={classes.navItem}>
                                    <Link to={item.to} className={classes.navLink}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="col-xs-4">
                    <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={classes.iconWrapper}>
                        <ReactSVG src={linkedin} alt={`${site.title} LinkedIn`} svgClassName={classes.icon} />
                    </a>
                </div>
            </div>
        </div>
    </div>
)

export default injectSheet(style)(Footer)
