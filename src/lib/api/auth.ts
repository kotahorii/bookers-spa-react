import Cookies from 'js-cookie'
import { SignInData, SignUpData } from 'types/types'
import client from './client'

export const signUp = (data: SignUpData) => client.post('auth', data)

export const signIn = (data: SignInData) => client.post('auth/sign_in', data)

export const signOut = () => {
  client.delete('auth/sign_out', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
}

export const getCurrentUser = () => {
  if (
    !Cookies.get('_access_token') ||
    !Cookies.get('_client') ||
    !Cookies.get('_uid')
  )
    return
  return client.get('/auth/sessions', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
}
