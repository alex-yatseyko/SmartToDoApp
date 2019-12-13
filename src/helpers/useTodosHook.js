import { useEffect, useReducer} from 'react'
import { todosReducer, initialState, TODOS_ACTIONS } from './todosReducer'

export const useTodosHook = () => {
    // const todosFromStorage = localStorage.getItem('todos')
  // const todosParsed = JSON.parse(todosFromStorage)
  const [todos, dispatch] = useReducer(todosReducer, initialState())
  // const [todos, setTodos] = useState(todosParsed || [])

const onAdd = text => dispatch({ 
  text,
  type: TODOS_ACTIONS.ADD 
})

  // const onAdd = text => setTodos([
  //   ...todos, {
  //     _id: uuid(), 
  //     text,
  //     completed: false
  //   }
  // ])

const onSwitch = _id => dispatch({
  _id,
  type: TODOS_ACTIONS.COMPLETE,
})

  // const onSwitch = _id => setTodos(todos.map(todo => _id === todo._id ? 
  //     {...todo, completed: !todo.completed} 
  //     : todo
  // )); 

  const onRemove = _id => dispatch({
    _id,
    type: TODOS_ACTIONS.REMOVE
  })  

  // const onRemove = _id => setTodos(
  //     todos.filter(todo => _id !== todo.id),
  //   )

  // const onRemove = _id => setTodos(todos.filter(todo => _id !== todo._id))

  const onEdit = newTodo => dispatch({
      newTodo,
      type: TODOS_ACTIONS.EDIT
  })

  useEffect(() => {
    const todosStringified = JSON.stringify(todos)
    localStorage.setItem('todos', todosStringified)
  }, [todos])

  return {
      todos,
      onAdd,
      onEdit,
      onSwitch,
      onRemove
  }
}