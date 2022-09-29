import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isActiveModal: true,
}

export const modalSlice = createSlice({
    name: 'activeModal',
    initialState,
    reducers: {
        setActiveModal: (state, active) => {
            state.isActiveModal = active.payload
        },
    }
}) 

export const { setActiveModal } = modalSlice.actions
export default modalSlice.reducer;