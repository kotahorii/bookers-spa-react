import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useAuthMutation } from './useAuthMutation'

export const useAuth = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConf, setPasswordConf] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const { signInMutate, signUpMutate } = useAuthMutation()

  const nameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value),
    []
  )

  const emailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  )
  const passwordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  )

  const passwordConfChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPasswordConf(e.target.value),
    []
  )

  const toggleMode = useCallback(() => setIsLogin(!isLogin), [isLogin])
  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (isLogin) {
        signInMutate.mutate({ email: email, password: password })
      } else {
        signUpMutate.mutate({
          name: name,
          email: email,
          password: password,
          passwordConfirmation: passwordConf,
        })
      }
    },
    [email, password, isLogin, name, passwordConf]
  )
  return {
    name,
    email,
    password,
    passwordConf,
    isLogin,
    nameChange,
    emailChange,
    passwordChange,
    passwordConfChange,
    toggleMode,
    authUser,
  }
}
