import { add, addBy, minus, sign_in } from "../actions"
import { useSelector, useDispatch } from "react-redux"



const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  const login = useSelector(state => state.login)

  return (
    <>
      <button onClick={() => dispatch(add())}>+</button>
      <span>{counter}</span>
      <button onClick={() => dispatch(minus())}>-</button>
      <button onClick={() => dispatch(addBy(5))}>Add By Five</button>

      <button onClick={() => dispatch(sign_in())}>
        login
      </button>
      <p>{login ? ("You Are In!") : ("You are Out")}</p>
    </>
  )
}

export default Counter