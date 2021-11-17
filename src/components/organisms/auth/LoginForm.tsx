import { useAuth } from 'hooks/useAuth'
import { memo, VFC } from 'react'

const LoginFormMemo: VFC = () => {
  const { email, emailChange, password, passwordChange } = useAuth()
  return (
    <>
      <label className="text-gray-400">Email:</label>
      <input
        type="text"
        placeholder="email"
        className="my-3 px-3 py-1 bg-gray-600 text-gray-400 rounded-lg border border-gray-500"
        value={email}
        onChange={emailChange}
      />

      <label className="text-gray-400">Password:</label>
      <input
        type="password"
        placeholder="password"
        className="my-3 px-3 py-1 bg-gray-600 text-gray-400 rounded-lg border border-gray-500"
        value={password}
        onChange={passwordChange}
      />
    </>
  )
}

export const LoginForm = memo(LoginFormMemo)
