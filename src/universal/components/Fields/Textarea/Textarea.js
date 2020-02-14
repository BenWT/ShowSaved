import React from 'react'
import cx from 'classnames'

const Textarea = ({
    classes,
    name,
    value,
    handler,
    placeholder,
    className,
}) => (
    <textarea
        name={name}
        className={cx(classes.textarea, className)}
        placeholder={placeholder}
        value={value}
        onChange={ e => handler(e.target.value) }
        rows="10"
    />
)

export default Textarea
