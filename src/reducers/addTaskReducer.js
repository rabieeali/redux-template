export const addTaskReducer = (state = [], action) => {
    switch (action.type) {
        case "ADD_TASK":
            return [...state, { id: Date.now(), task: action.payload, isCompleted: false }]
        default:
            return state
    }
}