// configureStore module import from redux toolkit
import { configureStore } from '@reduxjs/toolkit'

// import your slice method & pass it to the store
import counterSlice from './counterSlice'

// creat a store & return all the reducers methods
export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})