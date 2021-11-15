import { useAuthMutation } from 'hooks/useAuthMutation'
import { useQueryUser } from 'hooks/useQueryUser'
import { VFC, ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = ({ children }) => {
  const { signOutMutate } = useAuthMutation()
  const { data, isLoading, isError } = useQueryUser()
  if (isLoading) return <p>isLoading</p>
  if (isError) return <p>Error</p>
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-gray-400 text-sm font-mono">
      <nav className="flex flex-row h-24 w-full  items-center justify-between px-3 border-b-2 border-gray-700">
        <div className="flex flex-row items-center space-x-5">
          <button
            onClick={() => signOutMutate.mutate()}
            className="px-2 py-2 h-10 bg-blue-500 rounded-lg"
          >
            sign out
          </button>
          <div>{data?.email}</div>
          <div>{data?.name}</div>
        </div>
      </nav>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
    </div>
  )
}
