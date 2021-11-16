import { Layout } from 'components/templates/Layout'
import { useQueryUser } from 'hooks/queries/useQueryUser'
import { memo, VFC } from 'react'
import { PencilAltIcon, UserCircleIcon } from '@heroicons/react/solid'
import { EditModal } from 'components/organisms/main/EditModal'
import { useMain } from 'hooks/useMain'

const MainMemo: VFC = () => {
  const { data: currentUser, isLoading } = useQueryUser()
  const { openModal, currentUserAge, currentUserPrefecture } = useMain()
  if (isLoading) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <div className="flex flex-col space-y-3 bg-gray-700 px-2 py-2 rounded-lg">
        <div className="flex flex-row justify-between">
          <div></div>
          <PencilAltIcon onClick={openModal} className="w-6 cursor-pointer" />
        </div>
        <div className="w-48 flex flex-col items-center">
          {currentUser?.image.url ? (
            <img
              src={currentUser.image.url}
              alt="preview img"
              className="w-24 h-24 rounded-full shadow-md"
            />
          ) : (
            <UserCircleIcon className="w-20" />
          )}
        </div>
        <p className="text-lg">
          {currentUser?.name} {currentUserAge()}歳 ({currentUserPrefecture()})
        </p>
        <div className="8/12 h-0.5 bg-gray-500"></div>
        <p>自己紹介</p>
        {currentUser?.profile ? (
          <p>{currentUser.profile}</p>
        ) : (
          <p>よろしくお願いします。</p>
        )}
      </div>
      <EditModal />
    </Layout>
  )
}

export const Main = memo(MainMemo)
