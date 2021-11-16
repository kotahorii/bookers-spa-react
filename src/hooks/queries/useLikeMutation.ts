import client from 'lib/api/client'
import { useMutation, useQueryClient } from 'react-query'
import { InputLike, ResCreateLike } from 'types/likeTypes'
import { User } from 'types/userTypes'

export const useLikeMutation = () => {
  const queryClient = useQueryClient()
  const createLikeMutation = useMutation(
    (data: InputLike) =>
      client.post<ResCreateLike>('likes', {
        id: data.id,
        fromUserId: data.fromUser.id,
        toUserId: data.toUser.id,
      }),
    {
      onSuccess: (res, variant) => {
        const previousLikes = queryClient.getQueryData<User[]>('likes')
        const previousUsers = queryClient.getQueryData<User[]>('users')
        if (previousLikes && previousUsers) {
          queryClient.setQueryData<User[]>('likes', [
            res.data.like,
            ...previousLikes,
          ])
          queryClient.setQueryData<User[]>('users', [
            variant.toUser,
            ...previousUsers,
          ])
        }
      },
    }
  )
  return { createLikeMutation }
}
