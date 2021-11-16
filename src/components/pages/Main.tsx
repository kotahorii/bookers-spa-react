import { Layout } from 'components/templates/Layout'
import { useQueryUser } from 'hooks/queries/useQueryUser'
import { memo, VFC } from 'react'
import { PencilAltIcon, UserCircleIcon } from '@heroicons/react/solid'

const MainMemo: VFC = () => {
  const { data: currentUser, isLoading } = useQueryUser()
  if (isLoading) return <p>Loading...</p>
  return (
    <Layout>
      <div className="flex flex-col space-y-3 bg-gray-700 px-2 py-2 rounded-lg">
        <div className="flex flex-row justify-between">
          <div></div>
          <PencilAltIcon className="w-6" />
        </div>
        <div className="w-48 flex flex-col items-center">
          <UserCircleIcon className="w-20" />
        </div>
        <p className="text-lg">{currentUser?.name}</p>
        <div className="8/12 h-0.5 bg-gray-500"></div>
        <p>自己紹介</p>
        {currentUser?.profile ? (
          <p>{currentUser.profile}</p>
        ) : (
          <p>よろしくお願いします。</p>
        )}
      </div>
    </Layout>
  )
}

export const Main = memo(MainMemo)
