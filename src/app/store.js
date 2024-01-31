import { configureStore } from '@reduxjs/toolkit'
import lodginReducer from '../Slice/loginSlice'

export default configureStore({
  reducer: {
    login: lodginReducer,
  },
})