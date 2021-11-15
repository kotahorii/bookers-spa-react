export type Message = {
  chatRoomId: number
  userId: number | undefined
  content: string
  createdAt?: Date
}

export type ResMessage = {
  status: string
  message: string
}
