import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { fetchUsers } from "../actions";

const UsersList = () => {

    const containerStyle = {
        marginTop: "1rem",
        display: "flex",
        justifyContent: "center",
        gap: "0.5rem",
        flexWrap: "wrap"
    }
    const cardStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: "0.5rem",
        backgroundColor: "#ebebeb",
        padding: "0.5rem"
    }
    const centerStyle = {
        textAlign: "center"
    }


    const usersSlice = useSelector(state => state.usersSlice)
    const dispatch = useDispatch();

    const { users, loading, error } = usersSlice;

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    if (error && !loading) {
        return <p style={centerStyle}>Oops! There's an Error</p>
    }

    if (loading && !error) {
        return <p style={centerStyle}>Loading ...</p>
    }
    return (
        <>
            <h1 style={centerStyle}>List Of Users</h1>

            <main style={containerStyle}>
                {
                    users?.map(user => {
                        return (
                            <div style={cardStyle} key={user.id}>
                                <p>{user.name}</p>
                                <small>{user.email}</small>
                            </div>
                        )
                    })
                }
            </main>
        </>
    )
}


export default UsersList