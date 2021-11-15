import client from 'lib/api/client'
import { useMutation, useQueryClient } from 'react-query'
import { ResUpdateDetailUser, UpdateUserFormData, User } from 'types/userTypes'

type Data = {
  id: number | undefined | null
  formData: UpdateUserFormData
}
export const useUserMutation = () => {
  const queryClient = useQueryClient()
  const updateUserMutation = useMutation(
    (data: Data) =>
      client.put<ResUpdateDetailUser>(`users/${data.id}`, data.formData),
    {
      onSuccess: (res) => {
        const previousUser = queryClient.getQueryData<User[]>('users')
        if (previousUser) {
          queryClient.setQueryData<User[]>(
            'users',
            previousUser.map((user) =>
              user.id === res.data.user.id ? res.data.user : user
            )
          )
        }
      },
    }
  )

  return { updateUserMutation }
}
