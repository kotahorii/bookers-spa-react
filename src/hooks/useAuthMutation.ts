import Cookies from 'js-cookie'
import { signIn, signUp } from 'lib/api/auth'
import client from 'lib/api/client'
import { useMutation } from 'react-query'

export const useAuthMutation = () => {
  const signUpMutate = useMutation(signUp)
  const signInMutate = useMutation(signIn)
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
