import { useAppDispatch, useAppSelector } from 'app/hooks'
import { prefectures } from 'data/prefectures'
import { ChangeEvent, FormEvent, useCallback } from 'react'
import {
  selectProfile,
  setProfile,
  selectIsOpenModal,
  setIsOpenModal,
  setName,
  setPrefecture,
} from 'slices/authSlice'
import { UpdateUserFormData } from 'types/userTypes'
import { useQueryUser } from './queries/useQueryUser'
import { useUserMutation } from './queries/useUserMutation'
import { useAuth } from './useAuth'

export const useMain = () => {
  const { name, prefecture, image } = useAuth()
  const { updateUserMutation } = useUserMutation()
  const dispatch = useAppDispatch()
  const profile = useAppSelector(selectProfile)
  const isOpen = useAppSelector(selectIsOpenModal)
  const { data: currentUser } = useQueryUser()
  const closeModal = useCallback(() => {
    dispatch(setIsOpenModal(false))
  }, [dispatch])
  const openModal = useCallback(() => {
    dispatch(setIsOpenModal(true))
    if (currentUser) {
      dispatch(setName(currentUser.name))
      dispatch(setProfile(currentUser.profile))
      dispatch(setPrefecture(currentUser.prefecture))
    }
  }, [dispatch, currentUser])
  const profileChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => dispatch(setProfile(e.target.value)),
    [dispatch]
  )
  const userPrefecture = useCallback(
    (user) => {
      return prefectures[(user?.prefecture || 0) - 1]
    },
    [prefectures]
  )

  const userAge = useCallback((user) => {
    const birthday = user?.birthday.toString().replace(/-/g, '') || ''
    if (birthday.length !== 8) return

    const date = new Date()
    const today =
      date.getFullYear() +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      ('0' + date.getDate()).slice(-2)

    return Math.floor((parseInt(today) - parseInt(birthday)) / 10000)
  }, [])

  const createFormData = useCallback((): UpdateUserFormData => {
    const formData = new FormData()
    formData.append('name', name || '')
    formData.append('prefecture', String(prefecture))
    formData.append('profile', profile || '')
    formData.append('image', image)
    return formData
  }, [name, prefecture, profile, image])

  const updateUser = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const data = {
        id: currentUser?.id,
        formData: createFormData(),
      }
      updateUserMutation.mutate(data)
    },
    [currentUser, createFormData]
  )

  return {
    isOpen,
    closeModal,
    openModal,
    profile,
    profileChange,
    updateUser,
    userPrefecture,
    userAge,
  }
}
