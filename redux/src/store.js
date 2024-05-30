import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Counterslice'
import ArthemeticReducer from './ArthmeticSlice'
import TodoReducer from './Todoslice'



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    Arthemetic : ArthemeticReducer , //---any name can be taken abc or ArthemeticReducer
    Todo : TodoReducer

  },
})

