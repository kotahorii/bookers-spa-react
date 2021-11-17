import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useParams } from 'react-router'
import { ChatRoom } from 'types/chatRoomTypes'
import { Message } from 'types/messageTypes'
import { useMessageMutations } from './queries/useMessageMutations'
import { useQueryUser } from './queries/useQueryUser'

export const useChatRoom = () => {
  const { createMessageMutation } = useMessageMutations()
  const { id } = useParams()
  const { data: currentUser } = useQueryUser()
  const [content, setContent] = useState('')
  const lastMessage = useCallback((chatRoom: ChatRoom) => {
    return chatRoom.lastMessage.content.length > 30
      ? chatRoom.lastMessage.content.substr(0, 30) + '...'
      : chatRoom.lastMessage.content
  }, [])

  const contentChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setContent(e.target.value),
    []
  )

  const convertDateTime = useCallback((iso8601: string) => {
    const date = new Date(Date.parse(iso8601))
    const year = date.getFullYear()
    const month = date.getMonth() + 1
    const day = date.getDate()
    const hour = date.getHours()
    const minute = date.getMinutes()

    return year + '年' + month + '月' + day + '日' + hour + '時' + minute + '分'
  }, [])

  const submitMessage = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()

      const data: Message = {
        chatRoomId: Number(id!),
        userId: currentUser?.id,
        content: content,
      }
      createMessageMutation.mutate(data)
      setContent('')
    },
    [id, currentUser, content, createMessageMutation]
  )

  return { lastMessage, convertDateTime, submitMessage }
}
