import { useAppDispatch, useAppSelector } from 'app/hooks'
import { useCallback } from 'react'
import {
  selectSelectedUser,
  selectIsOpenDetailModal,
  setIsOpenDetailModal,
} from 'slices/userSlice'
import { InputLike } from 'types/likeTypes'
import { User } from 'types/userTypes'
import { useLikeMutation } from './queries/useLikeMutation'
import { useQueryLikes } from './queries/useQueryLikes'
import { useQueryUser } from './queries/useQueryUser'
import { useQueryUsers } from './queries/useQueryUsers'

export const useUser = () => {
  const { data: currentUser } = useQueryUser()
  const { data: users } = useQueryUsers()
  const { data: likedUsers } = useQueryLikes()
  const { createLikeMutation } = useLikeMutation()
  const selectedUser = useAppSelector(selectSelectedUser)
  const isOpenDetailModal = useAppSelector(selectIsOpenDetailModal)
  const dispatch = useAppDispatch()

  const handleCreateLike = useCallback(
    async (user: User) => {
      const data: InputLike = {
        fromUser: currentUser as User,
        toUser: user,
      }
      createLikeMutation.mutate(data)
    },
    [currentUser, createLikeMutation]
  )
  const isLikedUser = useCallback(
    (userId: number | number) => {
      if (likedUsers) {
        return likedUsers.some((likedUser) => likedUser.id === userId)
      }
    },
    [likedUsers]
  )
  const closeDetailModal = useCallback(() => {
    dispatch(setIsOpenDetailModal(false))
  }, [dispatch])

  const toLike = useCallback(() => {
    isLikedUser(selectedUser.id) ? void 0 : handleCreateLike(selectedUser)
  }, [handleCreateLike, isLikedUser, selectedUser])

  return {
    users,
    likedUsers,
    isLikedUser,
    toLike,
    handleCreateLike,
    selectedUser,
    isOpenDetailModal,
    closeDetailModal,
  }
}
