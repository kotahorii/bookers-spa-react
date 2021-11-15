import { useAuth } from 'hooks/useAuth'
import { SwitchVerticalIcon } from '@heroicons/react/solid'

export const Auth = () => {
  const {
    email,
    password,
    isLogin,
    authUser,
    emailChange,
    toggleMode,
    passwordChange,
  } = useAuth()
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 min-h-screen w-screen">
      <form
        onSubmit={authUser}
        className="mt-8 flex justify-center items-center flex-col text-gray-600"
      >
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
        <button
          type="submit"
          disabled={!email || !password}
          className="disabled:opacity-40 mt-5 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-400 rounded focus:outline-none "
        >
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
      <SwitchVerticalIcon
        className="my-5 h-5 w-5 text-blue-500 cursor-pointer"
        onClick={toggleMode}
      />
    </div>
  )
}
