import client from 'lib/api/client'
import { useMutation, useQueryClient } from 'react-query'
import { ResChatRoom } from 'types/chatRoomTypes'
import { Message, ResMessage } from 'types/messageTypes'

export const useMessageMutations = () => {
  const queryClient = useQueryClient()
  const createMessageMutation = useMutation(
    (data: Message) => client.post<ResMessage>('messages', data),
    {
      onSuccess: (res) => {
        const previousChatRoom =
          queryClient.getQueryData<ResChatRoom>('chatRoom')
        if (previousChatRoom) {
          queryClient.setQueryData<ResChatRoom>('chatRoom', {
            status: previousChatRoom.status,
            otherUser: previousChatRoom.otherUser,
            messages: [...previousChatRoom.messages, res.data.content],
          })
        }
      },
    }
  )
  return { createMessageMutation }
}
