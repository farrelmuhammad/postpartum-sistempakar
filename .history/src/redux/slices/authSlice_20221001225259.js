import { createSlice } from '@reduxjs/toolkit';
import jwtDecode from 'jwt-decode';

const token = localStorage.getItem("accessToken")
const {username} = jwtDecode(token)
// const username = localStorage.getItem("username")

const initialState = {
    accessToken: !!token,
    // isAdmin: false,
    username: username || null,
    // username: '',
    password: ""
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
        setPassword: (state, action) => {
            state.password = action.payload;
        },
        setData: (state, action) => {
            localStorage.setItem('accessToken', JSON.stringify(action.payload.token))
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

export const { setAccessToken, setUsername, setPassword, setData, clearData } = authSlice.actions;

export default authSlice.reducer;
