import { useAppDispatch } from 'app/hooks'
import { DetailModal } from 'components/molecules/modal/DetailModal'
import { CustomModal } from 'components/organisms/main/CustomModal'
import { Layout } from 'components/templates/Layout'
import { useQueryLikes } from 'hooks/queries/useQueryLikes'
import { useQueryUsers } from 'hooks/queries/useQueryUsers'
import { useUser } from 'hooks/useUser'
import { memo } from 'react'
import { setIsOpenDetailModal, setSelectedUser } from 'slices/userSlice'
import { CustomUserIcon } from 'components/molecules/CustomUserIcon'

const UsersMemo = () => {
  const { data: users, isLoading: isLoadingUsers } = useQueryUsers()
  const { isLoading: isLoadingLikes } = useQueryLikes()
  const { isOpenDetailModal, closeDetailModal } = useUser()
  const dispatch = useAppDispatch()

  if (isLoadingLikes && isLoadingUsers) return <Layout>Loading...</Layout>
  return (
    <Layout>
      <div className="flex flex-wrap justify-start space-x-3">
        {users?.map((user) => (
          <div
            className="flex flex-col bg-gray-700 rounded-lg shadow-lg px-3 py-4 items-center cursor-pointer"
            onClick={() => {
              dispatch(setSelectedUser(user))
              dispatch(setIsOpenDetailModal(true))
            }}
            key={user.id}
          >
            <CustomUserIcon user={user} />
            <p>{user.name}</p>
          </div>
        ))}
      </div>
      <CustomModal
        title="User detail"
        isOpen={isOpenDetailModal}
        closeModal={closeDetailModal}
      >
        <DetailModal />
      </CustomModal>
    </Layout>
  )
}

export const Users = memo(UsersMemo)
