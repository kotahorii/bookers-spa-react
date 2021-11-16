import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { AuthState } from 'types/sliceTypes'

const initialState: AuthState = {
  name: '',
  email: '',
  password: '',
  passwordConf: '',
  gender: 0,
  prefecture: 0,
  birthday: new Date('2000-01-01T00:00:00'),
  image: '',
  preview: '',
  isLogin: true,
  isOpenModal: false,
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
    setIsOpenModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenModal = action.payload
    },
    resetInput: (state) => {
      state.name = initialState.name
      state.email = initialState.email
      state.password = initialState.password
      state.passwordConf = initialState.passwordConf
      state.gender = initialState.gender
      state.prefecture = initialState.prefecture
      state.birthday = initialState.birthday
      state.image = initialState.image
      state.preview = initialState.preview
      state.isOpenModal = false
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
  setIsOpenModal,
  resetInput,
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
export const selectIsOpenModal = (state: RootState) => state.auth.isOpenModal
export const selectIsLogin = (state: RootState) => state.auth.isLogin

export default authSlice.reducer
