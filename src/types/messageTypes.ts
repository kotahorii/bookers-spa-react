export type Message = {
  chatRoomId: number
  userId: number | undefined
  content: string
  createdAt?: Date
}

export type ResMessage = {
  id: number
  chatRoomId: number
  content: string
  createdAt: Date
  updatedAt: Date
  userId: number
}

export type ResCreateMessage = {
  status: string
  message: ResMessage
}
