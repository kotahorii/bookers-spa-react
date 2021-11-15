import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useQuery } from 'react-query'
import { CurrentUser, User } from 'types/types'

const getCurrentUser = async () => {
  const { data } = await client.get<CurrentUser>('/auth/sessions', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
  return data.currentUser
}
export const useQueryUser = () => {
  return useQuery<User, Error>({
    queryKey: 'user',
    queryFn: getCurrentUser,
    staleTime: Infinity,
  })
}
