import { useState, useRef } from "react"
import { useSelector, useDispatch } from "react-redux"
import { addTask } from "../actions"


const AddTask = () => {
    const [todo, setTodo] = useState("")

    const inputRef = useRef(null)

    const dispatch = useDispatch()
    const state = useSelector(state => (state.tasks))

    const handleSubmit = (e) => {
        e.preventDefault()
        if (todo.length) {
            dispatch(addTask(todo))
        }
        inputRef.current.value = ""
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    ref={inputRef}
                    onChange={e => setTodo(e.target.value)}
                    placeholder="add todos ..." />
                <button>add</button>
            </form>
            <section>
                {state.map(item => <p key={item.id}>{item.task}</p>)}
            </section>
        </>
    )
}

export default AddTask