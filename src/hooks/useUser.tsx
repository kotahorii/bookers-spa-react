import { useCallback } from 'react'
import { InputLike } from 'types/likeTypes'
import { User } from 'types/userTypes'
import { useLikeMutation } from './queries/useLikeMutation'
import { useQueryLikes } from './queries/useQueryLikes'
import { useQueryUser } from './queries/useQueryUser'
import { useQueryUsers } from './queries/useQueryUsers'

export const useUser = () => {
  const { data: currentUser } = useQueryUser()
  const { data: users } = useQueryUsers()
  const { data: likes } = useQueryLikes()
  const { createLikeMutation } = useLikeMutation()

  const handleCreateLike = useCallback(
    async (user: User) => {
      const data: InputLike = {
        fromUser: currentUser as User,
        toUser: user,
      }
      createLikeMutation.mutate(data)
    },
    [currentUser]
  )
  const isLikedUser = (userId: number | number) => {
    if (likes) {
      return likes.some((likedUser) => likedUser.id === userId)
    }
  }
  return { users, likes, isLikedUser, handleCreateLike }
}
