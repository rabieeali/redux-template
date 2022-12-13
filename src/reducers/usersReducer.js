const initialState = {
    loading: false,
    error: "",
    users: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "FETCH_USERS_LOADING":
            return { ...state, loading: true, error: "" }
        case "FETCH_USERS_ERROR":
            return { ...state, loading: false, error: action.error }
        case "FETCH_USERS_SUCCESS":
            return { ...state, users: action.payload, loading: false }
        default:
            return state;
    }

}