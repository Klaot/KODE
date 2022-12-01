import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk(
    'users/fetchUsersStatus', 
      async (params, thunkApi) => {
      const {category, checkbox} = params
      const {data} = await axios.get(`https://stoplight.io/mocks/kode-frontend-team/koder-stoplight/86566464/users?__example=${category}`)
      if (checkbox === 0)  {
         return data.items.sort((a,b) => a.firstName.localeCompare(b.firstName)); 
      } else {
        return data.items
      }
    }  
  )

const initialState = {
    users: [],
    status: 'loading'
}

export const getUsersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchUsers.pending]: (state, action) => {
            state.status = 'loading'
            state.users = []
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users = action.payload
            state.status = 'success'
        },
        [fetchUsers.rejected]: (state, action) => {
            state.status = 'error'
            state.users = []
        },
      }
}) 

export const {setCategory, setCheckbox} = getUsersSlice.actions
export default getUsersSlice.reducer;