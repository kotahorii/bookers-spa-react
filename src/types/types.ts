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
  status: string
  currentUser: {
    id: number
    uid: string
    provider: string
    email: string
    name: string
    nickname?: string
    image?: string
    allowPasswordChange: boolean
  }
}
