import uuid from "uuid/v4";

export const TODOS_ACTIONS = {
    ADD: 'add',
    COMPLETE: 'complete',
    REMOVE: 'remove',
    EDIT : 'edit'
}

export const initialState = () => {
    const todosFromStorage = localStorage.getItem('todos')
    const todosParsed = JSON.parse(todosFromStorage)

    return todosParsed || []
}

export const todosReducer = (todos, action) => {
    const { type, _id, text, newTodo} = action;

    switch(type) {
        case TODOS_ACTIONS.ADD:
            return [
                ...todos, {
                    _id: uuid(),
                    text,
                    completed: false
                  }
            ]
        case TODOS_ACTIONS.COMPLETE:
            return todos.map(
                todo => _id === todo._id ? 
                {...todo, completed: !todo.completed} 
                : todo,
            );
        case TODOS_ACTIONS.REMOVE:
            return todos.filter(todo => _id !== todo._id); 
        case TODOS_ACTIONS.EDIT:
            return todos.map(
                todo => todo._id === newTodo._id ? newTodo : todo
            );
        default:
            throw new Error();         
    }
}