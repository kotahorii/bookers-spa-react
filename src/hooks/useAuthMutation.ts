import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useMutation } from 'react-query'
import { SignInData, SignUpData } from 'types/types'

export const useAuthMutation = () => {
  const signUpMutate = useMutation((data: SignUpData) =>
    client.post('auth', data)
  )
  const signInMutate = useMutation((data: SignInData) =>
    client.post('auth/sign_in', data)
  )
  const signOutMutate = useMutation(() =>
    client.delete('auth/sign_out', {
      headers: {
        'access-token': Cookies.get('_access_token') as string,
        client: Cookies.get('_client') as string,
        uid: Cookies.get('_uid') as string,
      },
    })
  )

  return { signUpMutate, signInMutate, signOutMutate }
}
