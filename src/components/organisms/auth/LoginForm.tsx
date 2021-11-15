import { ChangeEvent, VFC } from 'react'

type Props = {
  email: string
  emailChange: (e: ChangeEvent<HTMLInputElement>) => void
  password: string
  passwordChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const LoginForm: VFC<Props> = ({
  email,
  emailChange,
  password,
  passwordChange,
}) => {
  return (
    <>
      <label className="text-gray-400">Email:</label>
      <input
        type="text"
        placeholder="email"
        className="my-3 px-3 py-1 rounded-lg border border-gray-300"
        value={email}
        onChange={emailChange}
      />

      <label className="text-gray-400">Password:</label>
      <input
        type="password"
        placeholder="password"
        className="my-3 px-3 py-1 rounded-lg border border-gray-300"
        value={password}
        onChange={passwordChange}
      />
    </>
  )
}
