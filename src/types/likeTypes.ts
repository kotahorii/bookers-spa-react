import { User } from './userTypes'

export type Like = {
  id?: number
  fromUserId: number | undefined | null
  toUserId: number | undefined | null
}

export type InputLike = {
  id?: number
  fromUser: User
  toUser: User
}

export type ResLikes = {
  status: string
  activeLikes: User[]
}
