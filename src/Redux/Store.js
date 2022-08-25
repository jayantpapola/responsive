import { configureStore } from '@reduxjs/toolkit'
import navbarReducer from './Reducers/NavbarReducer'

export const store = configureStore({
  reducer: {
    navbar:navbarReducer
  },
})