import { User } from './userTypes'
import { Message, ResMessage } from './messageTypes'

export type ChatRoom = {
  chatRoom: {
    id: number
  }
  otherUser: User
  lastMessage: Message
}

export type ResChatRoom = {
  status: string
  otherUser: User
  messages: ResMessage[]
}

export type ResChatRooms = {
  status: string
  chatRooms: ChatRoom[]
}
