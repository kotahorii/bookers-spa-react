import { UserCircleIcon } from '@heroicons/react/solid'
import { memo, VFC } from 'react'
import { User } from 'types/userTypes'

type Props = {
  user: User | undefined
}

export const CustomUserIcon: VFC<Props> = memo(({ user }) => {
  return user?.image.url ? (
    <img className="w-16" alt="avatar" src={user?.image.url} />
  ) : (
    <UserCircleIcon className="w-16 text-gray-400" />
  )
})
