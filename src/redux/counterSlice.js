// slice - is nothing but a entity 
// that has an unique name, initial state, one or more reducers

// import createSlice method from redux toolkit - this method is used to create a new slice
import { createSlice } from '@reduxjs/toolkit'

// prepare your initial state 
const initialState = {
  count: 0,
}

// creating slice 
export const counterSlice = createSlice({
  name: 'counter', // this is the name of the slice - unique identify 
  initialState, // initial state
  reducers: {
    // all the reducer method 
    increment: (state) => { // increments the count
      state.count += 1
    },
    decrement: (state) => { // decrements the count
      state.count -= 1
    },
    incrementByValue: (state, action) => { // increment count by given value
      state.count += action.payload
    },
    resetCount: (state) => {
      state.count = 0
    }
  },
})

// export all the slice's reducers methods 
export const { increment, decrement, incrementByValue, resetCount } = counterSlice.actions

// export reducer as well
export default counterSlice.reducer