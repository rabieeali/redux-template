import { useRef } from "react"
import { useDispatch } from "react-redux"
import { addTask } from "../actions"


const AddTask = () => {
    const inputRef = useRef(null)
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const todo = inputRef.current.value
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
                    placeholder="add todos ..." />
                <button>add</button>
            </form>
        </>
    )
}

export default AddTask