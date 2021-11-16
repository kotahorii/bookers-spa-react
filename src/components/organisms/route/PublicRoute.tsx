import { useQueryUser } from 'hooks/queries/useQueryUser'
import { VFC } from 'react'
import { Navigate } from 'react-router'

type Props = {
  children: JSX.Element
}

export const PublicRoute: VFC<Props> = ({ children }) => {
  const { data, isLoading } = useQueryUser()
  if (isLoading) return <p>Loading...</p>
  return !data?.email ? children : <Navigate to="/main" replace />
}
