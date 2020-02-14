import React from 'react'
import cx from 'classnames'

const Input = ({
    classes,
    name,
    type,
    placeholder,
    className,
    value,
    handler,
}) => (
    <input
        name={name}
        type={type}
        className={cx(classes.input, className)}
        placeholder={placeholder}
        value={value}
        onChange={ e => handler(e.target.value) }
    />
)

export default Input
