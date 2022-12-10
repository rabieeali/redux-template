import { useSelector, useDispatch } from "react-redux"
import { toggleTask } from "../actions"

const TodoList = () => {

    const dispatch = useDispatch()
    const state = useSelector(state => (state.tasks))
    const toggleHandler = (id) => dispatch(toggleTask(id))

    const style = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "1rem"
    }

    const done = {
        textDecoration: "red line-through",
    }

    return (
        <section>
            {state.map(item => <div style={style} key={item.id}>
                <p style={item.isCompleted ? done : null}>{item.task}</p>
                <button onClick={() => toggleHandler(item.id)}>{item.isCompleted ? "Complete" : "Incomplete"}</button>
            </div>)}
        </section>
    )
}

export default TodoList