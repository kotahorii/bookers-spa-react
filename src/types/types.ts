export type CounterState = {
  value: number
}

export type SignUpData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
}

export type SignInData = {
  email: string
  password: string
}

export type User = {
  id: number
  uid: string
  provider: string
  email: string
  name: string
  nickname?: string
  image?: string
  allowPasswordChange: boolean
}

export type ResUser = {
  data: User
}

export type currentUser = {
  status: string
  currentUser: User
}
