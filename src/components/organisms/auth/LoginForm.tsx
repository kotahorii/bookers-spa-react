import { useAuth } from 'hooks/useAuth'
import { VFC } from 'react'

export const LoginForm: VFC = () => {
  const { email, emailChange, password, passwordChange } = useAuth()
  return (
    <>
      <label className="text-gray-400">Email:</label>
      <input
        type="text"
        placeholder="email"
        className="my-3 px-3 py-1 bg-gray-600 rounded-lg border border-gray-500"
        value={email}
        onChange={emailChange}
      />

      <label className="text-gray-400">Password:</label>
      <input
        type="password"
        placeholder="password"
        className="my-3 px-3 py-1 bg-gray-600 rounded-lg border border-gray-500"
        value={password}
        onChange={passwordChange}
      />
    </>
  )
}
