import { Layout } from 'components/templates/Layout'
import { useQueryChatRoom } from 'hooks/queries/useQueryChatRoom'
import { useChatRoom } from 'hooks/useChatRoom'
import { useParams } from 'react-router'

export const ChatRoom = () => {
  const { id } = useParams()
  const { data: chatRoom, isLoading } = useQueryChatRoom(Number(id))
  const { convertDateTime, submitMessage } = useChatRoom()

  if (isLoading) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <div className="flex flex-col space-y-3">
        
      </div>
    </Layout>
  )
}
