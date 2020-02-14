import React from 'react'
import cx from 'classnames'

const Anchor = ({
    classes,
    href,
    className,
    children,
}) => (
    <a href={href} className={cx(classes.anchor, className)}>{children}</a>
)

export default Anchor
