import { UserCircleIcon } from '@heroicons/react/solid'
import { useMain } from 'hooks/useMain'
import { useUser } from 'hooks/useUser'
import { HeartIcon } from '@heroicons/react/solid'

export const DetailModal = () => {
  const { selectedUser, isLikedUser, toLike } = useUser()
  const { userAge, userPrefecture } = useMain()
  return (
    <div>
      <div className="w-48 flex flex-col items-center">
        {selectedUser?.image.url ? (
          <img
            src={selectedUser.image.url}
            alt="preview img"
            className="w-24 h-24 rounded-full shadow-md"
          />
        ) : (
          <UserCircleIcon className="w-20" />
        )}
      </div>
      <p className="text-lg">
        {selectedUser?.name} {userAge(selectedUser)}歳 (
        {userPrefecture(selectedUser)})
      </p>
      <div className="8/12 h-0.5 bg-gray-500"></div>
      <p>自己紹介</p>
      {selectedUser?.profile ? (
        <p>{selectedUser.profile}</p>
      ) : (
        <p>よろしくお願いします。</p>
      )}
      <div className="flex flex-row space-x-3">
        <HeartIcon
          className={`w-6 cursor-pointer ${
            isLikedUser(selectedUser.id) ? 'text-red-400' : 'text-gray-400'
          }`}
          onClick={toLike}
        />
        <p>{isLikedUser(selectedUser.id) ? 'いいね済み' : 'いいね'}</p>
      </div>
    </div>
  )
}
