import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    name: "",
    address: "",
    city: "",
    province: "",
    phone: "",
    birth_place: "",
    birth_date: "",
    gender: "",
    profession: "",
    study_level: "",
}

export const authSlice = createSlice({
    name: 'profile',
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
