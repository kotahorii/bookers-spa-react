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
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-white text-sm font-mono">
      <nav className="flex flex-row h-24 w-screen border-b-2 items-center justify-between px-3 border-gray-500 ">
        <button
          onClick={() => signOutMutate.mutate()}
          className="px-2 py-2 h-10 bg-blue-500 rounded-lg"
        >
          sign out
        </button>
        <div>{data?.email}</div>
        <div>{data?.name}</div>
      </nav>
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
    </div>
  )
}
