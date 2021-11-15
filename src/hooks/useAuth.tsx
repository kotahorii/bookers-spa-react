import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { useAuthMutation } from './useAuthMutation'

export const useAuth = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)
  const { signInMutate } = useAuthMutation()

  const emailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value),
    []
  )
  const passwordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value),
    []
  )
  const resetInput = useCallback(() => {
    setEmail('')
    setPassword('')
  }, [])
  const toggleMode = useCallback(() => setIsLogin(!isLogin), [isLogin])
  const authUser = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      if (isLogin) {
        signInMutate.mutate({ email: email, password: password })
      } else {
      }
    },
    [email, password, isLogin]
  )
  return {
    email,
    password,
    isLogin,
    emailChange,
    passwordChange,
    resetInput,
    toggleMode,
    authUser,
  }
}
