export const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "ADD":
            return state + 1
        case "ADD_BY":
            return state + action.payload
        case "MINUS":
            return state - 1
        default:
            return state
    }
}
