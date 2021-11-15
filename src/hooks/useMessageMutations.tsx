import client from 'lib/api/client'
import { useMutation } from 'react-query'
import { Message, ResMessage } from 'types/types'

export const useMessageMutations = () => {
  const createMessageMutation = useMutation((data: Message) =>
    client.post<ResMessage>('messages', data)
  )
  return { createMessageMutation }
}
