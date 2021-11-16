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
    []
  )
  const currentUserPrefecture = useCallback(() => {
    return prefectures[(currentUser?.prefecture || 0) - 1]
  }, [prefectures, currentUser])

  const currentUserAge = useCallback(() => {
    const birthday = currentUser?.birthday.toString().replace(/-/g, '') || ''
    if (birthday.length !== 8) return

    const date = new Date()
    const today =
      date.getFullYear() +
      ('0' + (date.getMonth() + 1)).slice(-2) +
      ('0' + date.getDate()).slice(-2)

    return Math.floor((parseInt(today) - parseInt(birthday)) / 10000)
  }, [currentUser])

  const createFormData = useCallback((): UpdateUserFormData => {
    const formData = new FormData()
    formData.append('name', name || '')
    formData.append('prefecture', String(prefecture))
    formData.append('profile', profile || '')
    formData.append('image', image)
    return formData
  }, [name, prefecture, profile, image])

  const updateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = {
      id: currentUser?.id,
      formData: createFormData(),
    }
    updateUserMutation.mutate(data)
  }
  return {
    isOpen,
    closeModal,
    openModal,
    profile,
    profileChange,
    updateUser,
    currentUserPrefecture,
    currentUserAge,
  }
}
