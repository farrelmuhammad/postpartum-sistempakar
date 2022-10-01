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

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action) => {
            state.profile.name = action.payload;
            state.profile.address = action.payload;
            state.profile.city = action.payload;
            state.profile.province = action.payload;
            state.profile.phone = action.payload;
            state.profile.birth_place = action.payload;
            state.profile.birth_date = action.payload;
            state.profile.gender = action.payload;
            state.profile.profession = action.payload;
            state.profile.study_level = action.payload;
        },
        // setName: (state, action) => {
        //     state.name = action.payload;
        // },
        // setAddress: (state, action) => {
        //     state.address = action.payload;
        // },
        // setCity: (state, action) => {
        //     state.city = action.payload;
        // },
        // setProvince: (state, action) => {
        //     state.province = action.payload;
        // },
        // setPhone: (state, action) => {
        //     state.phone = action.payload;
        // },
        // setBirth_place: (state, action) => {
        //     state.birth_place = action.payload;
        // },
        // setBirth_date: (state, action) => {
        //     state.birth_date = action.payload;
        // },
        // setGender: (state, action) => {
        //     state.gender = action.payload;
        // },
        // setProfession: (state, action) => {
        //     state.profession = action.payload;
        // },
        // setStudy_level: (state, action) => {
        //     state.study_level = action.payload;
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

export const {
    setProfile,
    // setName,
    // setAddress,
    // setCity,
    // setProvince,
    // setPhone,
    // setBirth_place,
    // setBirth_date,
    // setGender,
    // setProfession,
    // setStudy_level,
    setData,
    clearData
} = profileSlice.actions;

export default profileSlice.reducer;
