import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    symptoms: []
}

export const symptomsSlice = createSlice({
    name: 'symptoms',
    initialState,
    reducers: {
        setSymptoms: (state, action) => {
            state.symptoms = action.payload.data;
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

export const { setSymptoms, setData, clearData } = symptomsSlice.actions;

export default symptomsSlice.reducer;
