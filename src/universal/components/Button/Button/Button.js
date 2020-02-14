import React from 'react'
import cx from 'classnames'

const Button = ({
    classes,
    className,
    onClick,
    children,
    small,
}) => (
    <button
        className={cx({
            [classes.button]: true,
            [className]: true,
            [classes.small]: small,
        })}
        onClick={onClick}
    >
        {children}
    </button>
)

export default Button
