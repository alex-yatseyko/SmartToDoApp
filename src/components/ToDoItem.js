import React from 'react'
import T from 'prop-types'

import {Checkbox} from './Checkbox'
import {Icon} from './Icon'
import {Text} from './Text'
import {withCheckedStyles} from './withCheckedStyles'
import '../App.css';



export const ToDoItem = withCheckedStyles(({todo, onSwitch, onRemove, additionalStyles }) => {
    return (
        <div className="todoItem">
            <Checkbox {...{todo, onSwitch}} />
            <Text 
                size="20px"
                {...additionalStyles}  
                // textDecoration={todo.completed ? 'line-through' : 'none'} 
                // color={todo.completed ? 'red' : 'initial'}
            >         
                    {todo.text} 
            </Text>
            <Icon name="remove" color="red" onClick={() => onRemove(todo._id)}/>
        </div>
    )
})

ToDoItem.propTypes = {
    additionalStyles: T.shape({
        color: T.string,
        textDecoration: T.string
    })
}