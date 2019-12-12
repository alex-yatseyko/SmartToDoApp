import React, {useState, useEffect} from 'react';
import './App.css';
import uuid from 'uuid/v4'

import {Text} from './components/Text'
import {ToDoInput} from './components/ToDoInput'
import {ToDoItem} from './components/ToDoItem'

function App() {
  const todosFromStorage = localStorage.getItem('todos')
  const todosParsed = JSON.parse(todosFromStorage)
  const [todos, setTodos] = useState(todosParsed || [])

  const onAdd = text => setTodos([
    ...todos, {
      _id: uuid(),
      text,
      completed: false
    }
  ])

  const onSwitch = _id => setTodos(todos.map(todo => _id === todo._id ? 
      {...todo, completed: !todo.completed} 
      : todo
  )); 

  // const onRemove = _id => setTodos(
  //     todos.filter(todo => _id !== todo.id),
  //   )

  const onRemove = _id => setTodos(todos.filter(todo => _id !== todo._id))

  useEffect(() => {
    const todosStringified = JSON.stringify(todos)
    localStorage.setItem('todos', todosStringified)
  }, [todos])

  return (
    <div className="App">
      <Text size="40px">Smart ToDo App</Text>
      <ToDoInput onAdd={onAdd} />
      <div className="container">
        {todos.map( todo => {return(
          <ToDoItem 
            key={todo._id}
            {...{todo}}
            onSwitch={onSwitch}
            onRemove={onRemove}
          />)
        })}

        {/* <ToDoItem 
          todo={{ _id: 'text', text: 'Some todo', completed: false }}
          onSwitch={onSwitch}
        />   */}
      </div>
      {/* <div className="triangle" />
      <div className="triangle leftside" /> */}
    </div>
  );
}

export default App;
