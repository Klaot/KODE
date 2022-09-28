import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    categoryId: 0,
    checkbox: 0,
}

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, active) => {
            state.categoryId = active.payload
        },
        setCheckbox: (state, active) => {
            state.checkbox = active.payload
        }
    }
}) 

export const {setCategory, setCheckbox} = filterSlice.actions
export default filterSlice.reducer;