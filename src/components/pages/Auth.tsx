import { useAuth } from 'hooks/useAuth'
import { SwitchVerticalIcon } from '@heroicons/react/solid'
import { LoginForm } from 'components/organisms/auth/LoginForm'
import { SignUpForm } from 'components/organisms/auth/SignUpForm'

export const Auth = () => {
  const {
    name,
    email,
    password,
    passwordConf,
    isLogin,
    nameChange,
    emailChange,
    toggleMode,
    passwordChange,
    passwordConfChange,
    authUser,
  } = useAuth()
  return (
    <div className="flex flex-col justify-center items-center bg-gray-800 min-h-screen w-screen">
      <form
        onSubmit={authUser}
        className="mt-8 flex justify-center items-center flex-col text-gray-600"
      >
        {isLogin ? (
          <LoginForm
            email={email}
            password={password}
            emailChange={emailChange}
            passwordChange={passwordChange}
          />
        ) : (
          <SignUpForm
            name={name}
            email={email}
            password={password}
            passwordConf={passwordConf}
            nameChange={nameChange}
            emailChange={emailChange}
            passwordChange={passwordChange}
            passwordConfChange={passwordConfChange}
          />
        )}
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
