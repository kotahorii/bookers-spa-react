import { Layout } from 'components/templates/Layout'
import { useQueryUser } from 'hooks/useQueryUser'
import { VFC } from 'react'

export const Main: VFC = () => {
  const { isLoading } = useQueryUser()
  if (isLoading) return <p>Loading...</p>
  return <Layout>
    
  </Layout>
}
