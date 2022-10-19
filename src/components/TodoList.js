import { ACTIONS } from "./Todo";

const TodoList = ({ todo, dispatch }) => {
  return (
    <div style={{ display: 'flex' }}>
      <span style={{ color: todo.complete ? 'green' : 'red' }}>{todo.name}</span>

      <div style={{ marginLeft: '10px' }}>
        <button onClick={() => dispatch({
          type: ACTIONS.TOGGLE_TODO,
          payload: { id: todo.id }
        })}>
          toggle
        </button>
        <button onClick={() => dispatch({
          type: ACTIONS.DELETE_TODO,
          payload: { id: todo.id }
        })}>
          delete
        </button>
      </div>
    </div>
  )
}

export default TodoList