import React, {useState, useEffect } from 'react'
import T from 'prop-types'

export const Checkbox = ({todo, onSwitch}) => {
    const [checked, setChecked] = useState(false)

    const onChange = e => {
        onSwitch(e .target.value)
        setChecked(!checked)
    }

    useEffect(() => {
        setChecked(todo.completed)
    }, [])

    return (
        <div>
            <input type="checkbox" value={todo._id} onChange={onChange} {...{ checked }} />
            <span className="checkmark"></span>
        </div>
    )
}

Checkbox.propTypes = {
    todo: T.shape({
        _id: T.string.isRequired,
        text: T.string.isRequired,
        completed: T.bool.isRequired
    }).isRequired,
    onSwitch: T.func.isRequired
}