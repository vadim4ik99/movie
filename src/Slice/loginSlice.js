import { createSlice } from '@reduxjs/toolkit'

export const loginSlice = createSlice({
  name: 'isLogin',
  initialState: {
    value: localStorage.getItem('isAuth') === 'false',
  },
  reducers: {
    changeStatus: (state) => {
      state.value = true;
      localStorage.setItem('isAuth', 'true'); // Сохраняем в localStorage
    },
    logout: (state) => {
      state.value = false;
      localStorage.removeItem('isAuth'); // Удаляем из localStorage
    },
  },
})

// Action creators are generated for each case reducer function
export const { changeStatus, logout } = loginSlice.actions

export default loginSlice.reducer