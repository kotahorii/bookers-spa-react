import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useQuery } from 'react-query'
import { ResChatRoom } from 'types/types'

const getChatRoom = async (id: number) => {
  const { data } = await client.get<ResChatRoom>(`chat_rooms/${id}`, {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
  return data
}
export const useQueryChatRoom = (id: number) => {
  return useQuery<ResChatRoom, Error>({
    queryKey: 'chatRooms',
    queryFn: () => getChatRoom(id),
    staleTime: 0
  })
}
