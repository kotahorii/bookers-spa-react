import { useAppSelector } from 'app/hooks'
import client from 'lib/api/client'
import { useMutation, useQueryClient } from 'react-query'
import { selectSelectedUser } from 'slices/userSlice'
import { InputLike } from 'types/likeTypes'
import { User } from 'types/userTypes'

export const useLikeMutation = () => {
  const user = useAppSelector(selectSelectedUser)
  const queryClient = useQueryClient()
  const createLikeMutation = useMutation(
    (data: InputLike) =>
      client.post('likes', {
        id: data.id,
        fromUserId: data.fromUser.id,
        toUserId: data.toUser.id,
      }),
    {
      onSuccess: () => {
        const previousUsers = queryClient.getQueryData<User[]>('likedUsers')
        if (previousUsers) {
          queryClient.setQueryData<User[]>('likedUsers', [
            ...previousUsers,
            user,
          ])
        }
      },
    }
  )
  return { createLikeMutation }
}
