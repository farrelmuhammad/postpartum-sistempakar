import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    accessToken: localStorage.getItem("accessToken"),
    // isAdmin: false,
    fullname: "",
    role: "",
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAccessToken: (state, action) => {
            state.accessToken = action.payload;
        },
        setFullname: (state, action) => {
            state.fullname = action.payload;
        },
        setRole: (state, action) => {
            state.role = action.payload;
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

export const { setAccessToken, setFullname, setRole, setData, clearData } = authSlice.actions;

export default authSlice.reducer;
