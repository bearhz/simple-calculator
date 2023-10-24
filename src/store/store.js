import { configureStore } from '@reduxjs/toolkit'
import calculatorReducer from './calculatorReducer'

export default configureStore({
  reducer: {
    calculator: calculatorReducer,
  },
})