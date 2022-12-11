// export const addTaskReducer = (state = [], action) => {
//     switch (action.type) {
//         case "ADD_TASK":
//             return [...state, { id: Date.now(), task: action.payload, isCompleted: false }]
//         case "TOGGLE_TASK":
//             const stateClone = [...state]
//             const newState = stateClone.map(item => {
//                 if (item.id === action.payload) {
//                     item.isCompleted = !item.isCompleted
//                 }
//                 return item
//             })
//             return newState
//         default:
//             return state
//     }
// }