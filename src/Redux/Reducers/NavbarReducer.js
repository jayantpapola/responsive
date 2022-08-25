import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: '',
}

export const navbarReducer = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    close: (state,action) => {
      console.log(action.payload);
      state.value = action.payload
    },
  },
})

export const { close} = navbarReducer.actions

export default navbarReducer.reducer