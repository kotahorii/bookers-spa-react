import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'
import { User } from 'types/userTypes'

type StateType = {
  user: User
  isOpenDetailModal: boolean
}
const initialState: StateType = {
  user: {
    id: 0,
    uid: '',
    provider: '',
    email: '',
    name: '',
    image: {
      url: '',
    },
    gender: 0,
    birthday: '',
    profile: '',
    prefecture: 13,
    allowPasswordChange: true,
  },
  isOpenDetailModal: false,
}

export const authSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setSelectedUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload
    },
    resetSelectedUser: (state) => {
      state.user = initialState.user
    },
    setIsOpenDetailModal: (state, action: PayloadAction<boolean>) => {
      state.isOpenDetailModal = action.payload
    },
  },
})

export const { setSelectedUser, resetSelectedUser, setIsOpenDetailModal } =
  authSlice.actions
export const selectSelectedUser = (state: RootState) => state.user.user
export const selectIsOpenDetailModal = (state: RootState) =>
  state.user.isOpenDetailModal
export default authSlice.reducer
