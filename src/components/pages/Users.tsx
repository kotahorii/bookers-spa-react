import { Layout } from 'components/templates/Layout'
import { useQueryLikes } from 'hooks/queries/useQueryLikes'
import { useQueryUsers } from 'hooks/queries/useQueryUsers'
import { useMain } from 'hooks/useMain'
import { memo } from 'react'

export const UsersMemo = () => {
  const { data: users, isLoading: isLoadingUsers } = useQueryUsers()
  const { data: likes, isLoading: isLoadingLikes } = useQueryLikes()
  const { userAge, userPrefecture } = useMain()

  if (isLoadingLikes && isLoadingUsers) return <Layout>Loading...</Layout>
  return (
    <Layout>
      {users?.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </Layout>
  )
}

export const Users = memo(UsersMemo)
