import { Header } from 'components/organisms/Header'
import { useQueryUser } from 'hooks/queries/useQueryUser'
import { VFC, ReactNode, memo } from 'react'

type Props = {
  children: ReactNode
}

export const Layout: VFC<Props> = memo(({ children }) => {
  const { isLoading, isError } = useQueryUser()
  if (isLoading) return <p>isLoading</p>
  if (isError) return <p>Error</p>
  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-800 text-gray-400 text-sm font-mono">
      <Header />
      <main className="flex flex-1 flex-col justify-center items-center w-screen">
        {children}
      </main>
    </div>
  )
})
