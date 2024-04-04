import { createSlice } from "@reduxjs/toolkit";



const authSlice = createSlice({
    name: "auth",
    initialState: {
        token: sessionStorage.getItem("token") || "",
        isUserLoggedIn: sessionStorage.getItem("token") ? true : false,
        userFullName: "",
        role: ""

    },
    reducers: {
        setToken: (state, action) => {
            const token = action.payload.accessToken
            state.token = token
            sessionStorage.setItem("token", token)
            const role = action.payload.user.roles
            console.log("role on slice:", role);
            state.role = role
            sessionStorage.setItem("role", role)
            state.isUserLoggedIn = true
        },
        removeToken: (state) => {
            state.token = ""
            sessionStorage.removeItem("token")
            state.role = ""
            sessionStorage.removeItem("role")
            state.isUserLoggedIn = false
        }
    }
})

export default authSlice.reducer
export const { setToken, removeToken } = authSlice.actions