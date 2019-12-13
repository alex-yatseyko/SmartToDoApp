import React from 'react';
import './App.css';
// import uuid from 'uuid/v4'

import { Text } from './components/Text'
import { ToDoInput } from './components/ToDoInput'
import { ToDoItem } from './components/ToDoItem'
// import { todosReducer, initialState, TODOS_ACTIONS } from './helpers/todosReducer'
import { useTodosHook } from './helpers/useTodosHook'

function App() {
  
  const {     
    todos,
    onAdd,
    onSwitch,
    onEdit,
    onRemove
  } = useTodosHook()

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
            onEdit={onEdit}
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
