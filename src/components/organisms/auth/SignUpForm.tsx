import { ChangeEvent, VFC } from 'react'

type Props = {
  name: string
  nameChange: (e: ChangeEvent<HTMLInputElement>) => void
  email: string
  emailChange: (e: ChangeEvent<HTMLInputElement>) => void
  password: string
  passwordChange: (e: ChangeEvent<HTMLInputElement>) => void
  passwordConf: string
  passwordConfChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const SignUpForm: VFC<Props> = ({
  name,
  nameChange,
  email,
  emailChange,
  password,
  passwordChange,
  passwordConf,
  passwordConfChange,
}) => {
  return (
    <>
      <div className="flex flex-row space-x-5">
        <div className="flex flex-col">
          <label className='text-gray-400'>Name:</label>
          <input
            type="text"
            placeholder="name"
            className="my-3 px-3 py-1 rounded-lg border border-gray-300"
            value={name}
            onChange={nameChange}
          />
          <label className='text-gray-400'>Email:</label>
          <input
            type="text"
            placeholder="email"
            className="my-3 px-3 py-1 rounded-lg border border-gray-300"
            value={email}
            onChange={emailChange}
          />
        </div>
        <div className="flex flex-col">
          <label className='text-gray-400'>Password:</label>
          <input
            type="password"
            placeholder="password"
            className="my-3 px-3 py-1 rounded-lg border border-gray-300"
            value={password}
            onChange={passwordChange}
          />

          <label className='text-gray-400'>PasswordConfirmation:</label>
          <input
            type="password"
            placeholder="password"
            className="my-3 px-3 py-1 rounded-lg border border-gray-300"
            value={passwordConf}
            onChange={passwordConfChange}
          />
        </div>
      </div>
    </>
  )
}
