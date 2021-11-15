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
      <label>Email:</label>
      <input
        type="text"
        placeholder="email"
        className="my-3 px-3 py-1 border border-gray-300"
        value={email}
        onChange={emailChange}
      />

      <label>Password:</label>
      <input
        type="password"
        placeholder="password"
        className="my-3 px-3 py-1 border border-gray-300"
        value={password}
        onChange={passwordChange}
      />
    </>
  )
}
