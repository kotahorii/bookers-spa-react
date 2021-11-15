import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { AuthState } from 'types/types'

const initialState: AuthState = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
  gender: 0,
  prefecture: 0,
  birthday: null,
  image: '',
  preview: '',
  isLogin: true,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,

  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    setEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setPasswordConf: (state, action: PayloadAction<string>) => {
      state.passwordConf = action.payload
    },
    setGender: (state, action: PayloadAction<number>) => {
      state.gender = action.payload
    },
    setPrefecture: (state, action: PayloadAction<number>) => {
      state.prefecture = action.payload
    },
    setBirthday: (state, action: PayloadAction<Date | null>) => {
      state.birthday = action.payload
    },
    setImage: (state, action: PayloadAction<string>) => {
      state.image = action.payload
    },
    setPreview: (state, action: PayloadAction<string>) => {
      state.preview = action.payload
    },
    setIsLogin: (state, action: PayloadAction<boolean>) => {
      state.isLogin = action.payload
    },
  },
})

export const {
  setName,
  setEmail,
  setPassword,
  setPasswordConf,
  setGender,
  setPrefecture,
  setBirthday,
  setImage,
  setPreview,
  setIsLogin,
} = authSlice.actions
export const selectName = (state: RootState) => state.auth.name
export const selectEmail = (state: RootState) => state.auth.email
export const selectPassword = (state: RootState) => state.auth.password
export const selectPasswordConf = (state: RootState) => state.auth.passwordConf
export const selectGender = (state: RootState) => state.auth.gender
export const selectPrefecture = (state: RootState) => state.auth.prefecture
export const selectBirthday = (state: RootState) => state.auth.birthday
export const selectImage = (state: RootState) => state.auth.image
export const selectPreview = (state: RootState) => state.auth.preview
export const selectIsLogin = (state: RootState) => state.auth.isLogin

export default authSlice.reducer
