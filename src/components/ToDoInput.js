import React, {useState } from 'react'
import T from 'prop-types'

export const ToDoInput = ({ onAdd, initialValue }) => {
    const [value, setInputValue] = useState(initialValue || '');

    const onChange = e => setInputValue(e.target.value)

    const onSubmit = e => {
        e.preventDefault();
        if (value === '') return;
        onAdd(value)
        setInputValue('')
    }

    return (
        <form onSubmit={onSubmit}>
            <input {...{value}} onChange={onChange} />
        </form>
    )
}

ToDoInput.propTypes = {
    onAdd: T.func.isRequired,
    initialValue: T.string
}
