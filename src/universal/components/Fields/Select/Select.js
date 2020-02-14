import React from 'react'
import cx from 'classnames'
import injectSheet from 'react-jss'

import style from './style'

const Select = ({
    classes,
    name,
    type,
    options,
    value,
    className,
}) => (
    <select name={name} type={type} className={cx(classes.select, className)}>
        {options.map((option) => (
            <option key={option.value} value={option.value}>{option.label}</option>
        ))}
    </select>
)

export default injectSheet(style)(Select)
