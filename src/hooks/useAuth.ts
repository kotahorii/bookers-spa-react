import { useAppDispatch, useAppSelector } from 'app/hooks'
import { ChangeEvent, FormEvent, useCallback } from 'react'
import {
  selectBirthday,
  selectEmail,
  selectGender,
  selectImage,
  selectIsLogin,
  selectName,
  selectPassword,
  selectPasswordConf,
  selectPrefecture,
  selectPreview,
  setBirthday,
  setEmail,
  setGender,
  setImage,
  setIsLogin,
  setName,
  setPassword,
  setPasswordConf,
  setPrefecture,
  setPreview,
} from 'slices/authSlice'
import { SignUpFormData } from 'types/userTypes'
import { useAuthMutation } from './queries/useAuthMutation'

export const useAuth = () => {
  const dispatch = useAppDispatch()
  const name = useAppSelector(selectName)
  const email = useAppSelector(selectEmail)
  const password = useAppSelector(selectPassword)
  const passwordConf = useAppSelector(selectPasswordConf)
  const gender = useAppSelector(selectGender)
  const prefecture = useAppSelector(selectPrefecture)
  const birthday = useAppSelector(selectBirthday)
  const image = useAppSelector(selectImage)
  const preview = useAppSelector(selectPreview)
  const isLogin = useAppSelector(selectIsLogin)
  const { signInMutate, signUpMutate } = useAuthMutation()

  const uploadImage = useCallback(
    (e) => {
      const file = e.target.files[0] as string
      dispatch(setImage(file))
    },
    [dispatch]
  )
  const previewImage = useCallback(
    (e) => {
      const file = e.target.files[0] as string
      dispatch(setPreview(window.URL.createObjectURL(file)))
    },
    [dispatch]
  )
  const nameChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(setName(e.target.value)),
    [dispatch]
  )
  const emailChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(setEmail(e.target.value)),
    [dispatch]
  )
  const passwordChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(setPassword(e.target.value)),
    [dispatch]
  )
  const passwordConfChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) =>
      dispatch(setPasswordConf(e.target.value)),
    [dispatch]
  )
  const genderChange = useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      dispatch(setGender(e.target.value as number)),
    [dispatch]
  )
  const prefectureChange = useCallback(
    (e: ChangeEvent<{ value: unknown }>) =>
      dispatch(setPrefecture(e.target.value as number)),
    [dispatch]
  )
  const birthdayChange = useCallback(
    (date: Date | null) => dispatch(setBirthday(date)),
    [dispatch]
  )
  const imageChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      uploadImage(e)
      previewImage(e)
    },
    [uploadImage, previewImage]
  )
  const resetPreview = useCallback(() => dispatch(setPreview('')), [dispatch])
  const toggleMode = useCallback(
    () => dispatch(setIsLogin(!isLogin)),
    [isLogin, dispatch]
  )
  const createFormData = useCallback((): SignUpFormData => {
    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('password', password)
    formData.append('passwordConfirmation', passwordConf)
    formData.append('gender', String(gender))
    formData.append('prefecture', String(prefecture))
    formData.append('birthday', String(birthday))
    formData.append('image', image)

    return formData
  }, [name, email, password, passwordConf, gender, prefecture, birthday, image])

  const authUser = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = createFormData()

      if (isLogin) {
        signInMutate.mutate({ email: email, password: password })
      } else {
        signUpMutate.mutate(data)
      }
    },
    [createFormData, email, password, isLogin, signInMutate, signUpMutate]
  )
  return {
    name,
    email,
    password,
    passwordConf,
    gender,
    prefecture,
    birthday,
    image,
    preview,
    isLogin,
    nameChange,
    emailChange,
    passwordChange,
    passwordConfChange,
    genderChange,
    prefectureChange,
    birthdayChange,
    imageChange,
    resetPreview,
    toggleMode,
    authUser,
  }
}
