import { useAuth } from 'hooks/useAuth'
import { SwitchVerticalIcon } from '@heroicons/react/solid'
import { LoginForm } from 'components/organisms/auth/LoginForm'
import { SignUpForm } from 'components/organisms/auth/SignUpForm'

export const Auth = () => {
  const { email, password, isLogin, toggleMode, authUser } = useAuth()
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 min-h-screen w-screen">
      <form
        onSubmit={authUser}
        className="mt-8 flex shadow-xl bg-gray-700 rounded-xl px-7 py-5 items-center flex-col text-gray-600"
      >
        {isLogin ? <LoginForm /> : <SignUpForm />}
        <div className="flex flex-row mt-5 space-x-3 items-center justify-center">
          <button
            type="submit"
            disabled={!email || !password}
            className="disabled:opacity-40 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-400 rounded focus:outline-none "
          >
            {isLogin ? 'Login' : 'Register'}
          </button>
          <SwitchVerticalIcon
            className="w-5 text-blue-500 cursor-pointer"
            onClick={toggleMode}
          />
        </div>
      </form>
    </div>
  )
}
