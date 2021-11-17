import client from 'lib/api/client'
import { useMutation } from 'react-query'
import { useParams } from 'react-router'
import { Message, ResMessage } from 'types/messageTypes'
import { useQueryChatRoom } from './useQueryChatRoom'

export const useMessageMutations = () => {
  const { id } = useParams()
  const { refetch } = useQueryChatRoom(Number(id))
  const createMessageMutation = useMutation(
    (data: Message) => client.post<ResMessage>('messages', data),
    {
      onSuccess: (res) => {
        refetch()
      },
    }
  )
  return { createMessageMutation }
}
