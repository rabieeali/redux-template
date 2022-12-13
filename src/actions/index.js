import axios from "../api/axios"

export const fetchUsers = () => async (dispatch) => {
    try {
        dispatch({ type: "FETCH_USERS_LOADING" });
        const response = await axios.get("/users")
        dispatch({ type: "FETCH_USERS_SUCCESS", payload: response?.data })

    } catch (err) {
        dispatch({ type: "FETCH_USERS_ERROR", error: err.message })
    }
}