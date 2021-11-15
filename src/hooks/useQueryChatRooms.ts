import Cookies from 'js-cookie'
import client from 'lib/api/client'
import { useQuery } from 'react-query'
import { ChatRoom, ResChatRooms } from 'types/types'

const getChatRooms = async () => {
  const { data } = await client.get<ResChatRooms>('chat_rooms', {
    headers: {
      'access-token': Cookies.get('_access_token') as string,
      client: Cookies.get('_client') as string,
      uid: Cookies.get('_uid') as string,
    },
  })
  return data.chatRooms
}

export const useQueryChatRooms = () => {
  return useQuery<ChatRoom[], Error>({
    queryKey: 'chatRooms',
    queryFn: getChatRooms,
    staleTime: 0,
  })
}
