import { useReducer, useState } from "react";
import TodoList from "./TodoList";

export const ACTIONS = {
  ADD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo'
}

function reducer(todos, action) {
  switch(action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete }
        }
        return todo
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => todo.id !== action.payload.id)
    default:
      return todos
  }
}

const newTodo = (name) => {
  return {
    id: Date.now(),
    name: name,
    complete: false
  }
}

const Todo = () => {
  // const [count, setCount] = useState(0)
  const [todos, dispatch] = useReducer(reducer, [])
  const [name, setName] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch({
      type: ACTIONS.ADD_TODO,
      payload: { name: name }
    })
    setName('')
  }

  // console.log(todos)

  return (
    <div style={{ 
      padding: '2rem', 
      width: '100%', 
      backgroundColor: '#f2f2f2', 
      marginBottom: '4rem', 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <p style={{ fontSize: '20px', fontWeight: 'bold', textTransform: 'uppercase' }}>
        Todo App
      </p>
      
      <form style={{marginBottom: '2rem'}} onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          onChange={e => setName(e.target.value)} 
          style={{
            width: '100%',
            borderRadius: '20px',
            padding: '1rem',
            border: '1px solid gray',
            fontSize: '20px'
          }}
        />
      </form>

      { todos.map(todo => {
        return (
          <TodoList 
            key={todo.id} 
            todo={todo} 
            dispatch={dispatch}
          />
        )
      }) }
    </div>
  )
}

export default Todo