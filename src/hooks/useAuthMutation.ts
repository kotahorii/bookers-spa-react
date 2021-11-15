import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router'
import { SignInData, SignUpData } from 'types/types'

export const useAuthMutation = () => {
  const navigate = useNavigate()
  const signUpMutate = useMutation((data: SignUpData) =>
    client.post('auth', data)
  )
  const signInMutate = useMutation(
    (data: SignInData) => client.post('auth/sign_in', data),
    {
      onSuccess: (res) => {
        Cookies.set('_access_token', res.headers['access-token'])
        Cookies.set('_client', res.headers['client'])
        Cookies.set('_uid', res.headers['uid'])

        navigate('/main')
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
