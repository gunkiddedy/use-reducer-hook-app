import { useReducer } from "react";

const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement',
}

function reducer(state, action) {
  switch(action.type) {
    case ACTIONS.INCREMENT:
      return { count: state.count + 1 }
    case ACTIONS.DECREMENT:
      return { count: state.count - 1 }
    default:
      return state
  }
}

const IncDec = () => {
  // const [count, setCount] = useState(0)
  const [state, dispatch] = useReducer(reducer, { count: 10 })

  const increment = () => {
    dispatch({
      type: ACTIONS.INCREMENT
    })
  }

  const decrement = () => {
    dispatch({
      type: ACTIONS.DECREMENT
    })
  }

  return (
    <div
      style={{
      padding:
      '2rem',
      width:
      '100%',
      backgroundColor:
      '#f2f2f2',
      marginBottom:
      '4rem',
      display:
      'flex',
      flexDirection:
      'column',
      alignItems:
      'center',
      justifyContent:
      'center'
      }}
    >
      <p
        style={{
        fontSize:
        '20px',
        fontWeight:
        'bold'
        }}
      >USE REDUCER HOOK</p>
      
      <div>
        <button
          onClick={decrement}
          style={{
          padding:
          '1rem',
          fontSize:
          '20px'
          }}
        >-</button>

        <span
          style={{
          padding:
          '1rem',
          fontSize:
          '40px',
          }}
        >{state.count}</span>

        <button
          onClick={increment}
          style={{
          padding:
          '1rem',
          fontSize:
          '20px'
          }}
        >+</button>
      </div>
    </div>
  )
}

export default IncDec