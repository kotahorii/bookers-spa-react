import { useAppDispatch } from 'app/hooks'
import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useMutation, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router'
import { resetInput } from 'slices/authSlice'
import { ResAuthUser, SignInData, SignUpFormData, User } from 'types/userTypes'

export const useAuthMutation = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const queryClient = useQueryClient()

  const signUpMutate = useMutation(
    (data: SignUpFormData) => client.post<ResAuthUser>('auth', data),
    {
      onSuccess: async (res) => {
        queryClient.setQueryData('user', res.data.data)
        Cookies.set('_access_token', res.headers['access-token'])
        Cookies.set('_client', res.headers['client'])
        Cookies.set('_uid', res.headers['uid'])
        navigate('/main')
        dispatch(resetInput())
      },
    }
  )
  const signInMutate = useMutation(
    (data: SignInData) => client.post<ResAuthUser>('auth/sign_in', data),
    {
      onSuccess: async (res) => {
        queryClient.setQueryData('user', res.data.data)
        Cookies.set('_access_token', res.headers['access-token'])
        Cookies.set('_client', res.headers['client'])
        Cookies.set('_uid', res.headers['uid'])
        navigate('/main')
        dispatch(resetInput())
      },
    }
  )
  const signOutMutate = useMutation(
    () =>
      client.delete('auth/sign_out', {
        headers: {
          'access-token': Cookies.get('_access_token') as string,
          client: Cookies.get('_client') as string,
          uid: Cookies.get('_uid') as string,
        },
      }),
    {
      onSuccess: () => {
        const previousUser = queryClient.getQueryData<User>('user')
        if (previousUser) {
          queryClient.removeQueries('user')
        }
        Cookies.remove('_access_token')
        Cookies.remove('_client')
        Cookies.remove('_uid')
        navigate('/')
      },
      onError: (err) => {
        console.log(err)
      },
    }
  )

  return { signUpMutate, signInMutate, signOutMutate }
}
