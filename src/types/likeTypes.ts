export type Like = {
  id?: number
  fromUserId: number | undefined | null
  toUserId: number | undefined | null
}

export type ResLikes = {
  status: string
  activeLikes: string[]
  passiveLikes: string[]
}

export type ResCreateLike = {
  status: string
  like: string
  is_matched: boolean
}
