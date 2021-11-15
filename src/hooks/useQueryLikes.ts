import Cookies from 'js-cookie'
import client from 'lib/api/client'

const getLikes = async () => {
  const { data } = await client.get('likes', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
  return 
}
export const useQueryLikes = () => {}
