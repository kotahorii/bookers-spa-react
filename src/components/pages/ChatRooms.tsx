import { UserCircleIcon } from '@heroicons/react/solid'
import { Layout } from 'components/templates/Layout'
import { useQueryChatRooms } from 'hooks/queries/useQueryChatRooms'
import { useChatRoom } from 'hooks/useChatRoom'
import { Link } from 'react-router-dom'

export const ChatRooms = () => {
  const { data: chatRooms, isLoading } = useQueryChatRooms()
  const { lastMessage } = useChatRoom()

  if (isLoading) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <div className="flex flex-col space-y-3">
        {chatRooms?.map((chatRoom) => (
          <Link
            key={chatRoom.otherUser.id}
            to={`/chatroom/${chatRoom.chatRoom.id}`}
            className="cursor-pointer px-3 py-3 bg-gray-700 rounded-lg"
          >
            {chatRoom.otherUser.image.url ? (
              <img
                className="w-16"
                alt="avatar"
                src={chatRoom.otherUser.image.url}
              />
            ) : (
              <UserCircleIcon className="w-16 text-gray-400" />
            )}
            <p>{chatRoom.otherUser.name}</p>
            <p>
              {chatRoom.lastMessage === null
                ? 'まだメッセージがありません'
                : lastMessage(chatRoom)}
            </p>
          </Link>
        ))}
      </div>
    </Layout>
  )
}
