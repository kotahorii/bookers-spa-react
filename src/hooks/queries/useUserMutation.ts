import { useAppDispatch } from 'app/hooks'
import client from 'lib/api/client'
import { useMutation, useQueryClient } from 'react-query'
import { resetInput } from 'slices/authSlice'
import { ResUpdateDetailUser, UpdateUserFormData, User } from 'types/userTypes'

type Data = {
  id: number | undefined | null
  formData: UpdateUserFormData
}
export const useUserMutation = () => {
  const queryClient = useQueryClient()
  const dispatch = useAppDispatch()
  const updateUserMutation = useMutation(
    (data: Data) =>
      client.put<ResUpdateDetailUser>(`users/${data.id}/`, data.formData),
    {
      onSuccess: (res) => {
        const previousUsers = queryClient.getQueryData<User[]>('users')
        dispatch(resetInput())
        queryClient.setQueryData<User>('user', res.data.user)
        if (previousUsers) {
          queryClient.setQueryData<User[]>(
            'users',
            previousUsers.map((user) =>
              user.id === res.data.user.id ? res.data.user : user
            )
          )
        }
      },
    }
  )

  return { updateUserMutation }
}
