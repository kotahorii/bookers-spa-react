import { CustomButton } from 'components/atoms/CustomButton'
import { CustomUserIcon } from 'components/molecules/CustomUserIcon'
import { CustomInput } from 'components/organisms/auth/CustomInput'
import { Layout } from 'components/templates/Layout'
import { useQueryChatRoom } from 'hooks/queries/useQueryChatRoom'
import { useChatRoom } from 'hooks/useChatRoom'
import { memo, useEffect } from 'react'
import { useQueryClient } from 'react-query'
import { useParams } from 'react-router'

export const ChatRoom = memo(() => {
  const queryClient = useQueryClient()
  const { id } = useParams()
  const { data: chatRoom, isLoading } = useQueryChatRoom(Number(id))
  const { submitMessage, content, contentChange } = useChatRoom()

  useEffect(() => {
    return () => {
      queryClient.removeQueries('chatRoom')
    }
  }, [queryClient])

  if (isLoading) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <div className="flex flex-col space-y-3">
        <CustomUserIcon user={chatRoom?.otherUser} />
        <div>{chatRoom?.otherUser.name}</div>
        {chatRoom?.messages.map((message, index) => (
          <p key={index}>{message.content}</p>
        ))}
        <form
          onSubmit={submitMessage}
          className="flex flex-row items-center space-x-3"
        >
          <CustomInput
            placeholder="message"
            type="text"
            value={content}
            onChange={contentChange}
          />
          <div className="h-10">
            <CustomButton text="Send" type="submit" />
          </div>
        </form>
      </div>
    </Layout>
  )
})
