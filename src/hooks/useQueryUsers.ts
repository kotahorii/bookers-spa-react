import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useQuery } from 'react-query'
import { ResUsers, User } from 'types/userTypes'

const getUsers = async () => {
  const { data } = await client.get<ResUsers>('users', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
  return data.users
}
export const useQueryUsers = () => {
  return useQuery<User[], Error>({
    queryKey: 'users',
    queryFn: getUsers,
    staleTime: 0,
  })
}
