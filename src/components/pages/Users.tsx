import { Layout } from 'components/templates/Layout'
import { useQueryLikes } from 'hooks/queries/useQueryLikes'
import { useQueryUsers } from 'hooks/queries/useQueryUsers'
import { memo } from 'react'

export const UsersMemo = () => {
  const { data: users, isLoading: isLoadingUsers } = useQueryUsers()
  const { data: likes, isLoading: isLoadingLikes } = useQueryLikes()

  if (isLoadingLikes && isLoadingUsers) return <Layout>Loading...</Layout>
  return <Layout>
    
  </Layout>
}

export const Users = memo(UsersMemo)
