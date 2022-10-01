import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    isAdmin: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
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