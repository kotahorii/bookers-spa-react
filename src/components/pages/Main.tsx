import { Layout } from 'components/templates/Layout'
import { useQueryUser } from 'hooks/queries/useQueryUser'
import { memo, VFC } from 'react'

const MainMemo: VFC = () => {
  const { isLoading } = useQueryUser()
  if (isLoading) return <p>Loading...</p>
  return <Layout>

  </Layout>
}

export const Main = memo(MainMemo)
