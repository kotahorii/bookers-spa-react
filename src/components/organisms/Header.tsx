import { CustomButton } from 'components/atoms/CustomButton'
import { useAuthMutation } from 'hooks/queries/useAuthMutation'
import { memo } from 'react'
import { Link } from 'react-router-dom'

export const HeaderMemo = () => {
  const { signOutMutate } = useAuthMutation()

  return (
    <nav className="flex flex-row h-24 w-full  items-center justify-between px-3 border-b-2 border-gray-700">
      <div className="flex flex-row items-center space-x-5">
        <CustomButton text="sign out" onClick={() => signOutMutate.mutate()} />
        <Link to="/users" className="hover:text-gray-300">
          users
        </Link>
        <Link to="/chatRoom" className="hover:text-gray-300">
          chat room
        </Link>
        <Link to="/main" className="hover:text-gray-300">
          main
        </Link>
      </div>
    </nav>
  )
}

export const Header = memo(HeaderMemo)
