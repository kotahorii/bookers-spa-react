export type AuthState = {
  id: number | null | undefined
  name: string
  email: string
  password: string
  passwordConf: string
  gender: number
  prefecture: number
  birthday: Date | null
  image: string
  preview: string
  isLogin: boolean
  isOpenModal: boolean
  profile: string
}
