import { useAuthMutation } from 'hooks/useAuthMutation'

export const Header = () => {
  const { signOutMutate } = useAuthMutation()

  return (
    <nav className="flex flex-row h-24 w-full  items-center justify-between px-3 border-b-2 border-gray-700">
      <div className="flex flex-row items-center space-x-5">
        <button
          onClick={() => signOutMutate.mutate()}
          className="px-2 py-2 h-10 bg-blue-500 rounded-lg"
        >
          sign out
        </button>
        <span>users</span>
        <span>chat room</span>
        <span>main</span>
      </div>
    </nav>
  )
}
