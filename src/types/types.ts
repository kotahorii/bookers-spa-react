export type CounterState = {
  value: number
}

export type SignUpData = {
  name: string
  email: string
  password: string
  passwordConfirmation: string
  gender: number
  prefecture: number
  birthday: Date
  image: string
}

export type SignUpFormData = FormData & {
  append(name: keyof SignUpData, value: String | Blob, fileName?: string): any
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
  image: {
    url: string
  }
  gender: number
  birthday: String | number | Date
  profile: string
  prefecture: number
  allowPasswordChange: boolean
  createdAt?: Date
  updatedAt?: Date
}

export type UpdateUserData = {
  id: number | undefined | null
  name?: string
  prefecture?: number
  profile?: string
  image?: string
}

export type UpdateUserFormData = FormData & {
  append(
    name: keyof UpdateUserData,
    value: String | Blob,
    fileName?: string
  ): any
}

export type ResAuthUser = {
  data: User
}

export type ResUsers = {
  status: string
  users: User[]
}

export type ResUpdateDetailUser = {
  status: string
  user: User
}

export type CurrentUser = {
  status: string
  currentUser: User
}

export type Like = {
  id?: number
  fromUserId: number | undefined | null
  toUserId: number | undefined | null
}

export type ChatRoom = {
  chatRoom: {
    id: number
  }
  otherUser: User
  lastMessage: Message
}

export type Message = {
  chatRoomId: number
  userId: number | undefined
  content: string
  createdAt?: Date
}
