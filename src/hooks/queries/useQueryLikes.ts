import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useQuery } from 'react-query'
import { ResLikes } from 'types/likeTypes'
import { User } from 'types/userTypes'

const getLikes = async () => {
  const { data } = await client.get<ResLikes>('likes', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
  return data.activeLikes
}
export const useQueryLikes = () => {
  return useQuery<User[], Error>({
    queryKey: 'likedUsers',
    queryFn: getLikes,
    staleTime: 0,
  })
}
