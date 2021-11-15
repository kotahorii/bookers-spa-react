import { useQueryUser } from 'hooks/useQueryUser'
import { VFC } from 'react'
import { Navigate } from 'react-router'

type Props = {
  children: JSX.Element
}

export const PrivateRoute: VFC<Props> = ({ children }) => {
  const { data, isLoading } = useQueryUser()
  if (isLoading) return <p>Loading...</p>
  return data?.email ? children : <Navigate to="/" replace />
}