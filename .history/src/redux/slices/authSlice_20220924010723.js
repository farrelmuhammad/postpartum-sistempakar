import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    username: "",
    // password: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setUsername: (state, action) => {
            state.username = action.payload;
        },
        // setPassword: (state, action) => {
        //     state.password = action.payload;
        // },
        setData: (state, action) => {
            return {
                ...state,
                ...action.payload,
            }
        },
        clearData: (state, action) => {
            return initialState;
        }
    }
});

export const { setToken, setUsername, setPassword, setData, clearData } = authSlice.actions;

export default authSlice.reducer;
