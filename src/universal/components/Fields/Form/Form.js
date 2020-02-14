import React from 'react'

const Form = ({
    children,
    handler
}) => (
    <form onSubmit={handler}>
        {children}
    </form>
)

export default Form