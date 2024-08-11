import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "user",
    initialState: {
        user: null,
        isFetching: false,
        error: false
    },
    reducers:{
        loginStart : (state,action) => {
            state.isFetching = true
        },
        loginSuccess: (state,action) => {
            state.user = action.payload
            state.isFetching = false
        },
        loginFailure: (state,action) => {
            state.error = true
        },
        logout: (state,action) => {
            state.user = null
        }
    }
})
export const {loginStart, loginSuccess, loginFailure, logout} = authSlice.actions
export default authSlice.reducer