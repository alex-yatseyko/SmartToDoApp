import React, { useState } from 'react'

import { Text } from './Text'
import { ToDoInput } from './ToDoInput'

export const ToDoText = ({ todo, additionalStyles, onEdit }) => {
    const [isEditable, setIsEditable] = useState(false)
    
    const onClick = () => setIsEditable(true);

    const onSaveChanges = text => {
        setIsEditable(false)
        onEdit({ ...todo, text })
    }

    return isEditable ? <ToDoInput onAdd={ onSaveChanges } initialValue={todo.text} /> : 
    (<Text 
        size="20px"
        {...additionalStyles}
        onClick={onClick}
    >         
        {todo.text} 
    </Text>)
}