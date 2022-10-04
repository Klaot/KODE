import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    avatarUrl: '', 
    firstName: '',
    lastName: '',
    birthday: '',
    phone: '',
    userTag: '',
    position: ''
};

export const userItem = createSlice({
    name: 'userItem',
    initialState,
    reducers: {
        setUserItem: (state, action) => {
            state.avatarUrl = action.payload.avatarUrl
            state.firstName = action.payload.firstName
            state.lastName = action.payload.lastName
            state.birthday = action.payload.birthday
            state.phone = action.payload.phone
            state.userTag = action.payload.userTag
            state.position = action.payload.position
        }
    }
})

export const { setUserItem } = userItem.actions;
export default userItem.reducer;