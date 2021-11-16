import { useAuth } from 'hooks/useAuth'
import { VFC } from 'react'
import { genders } from 'data/genders'
import { prefectures } from 'data/prefectures'
import { CustomDatePicker } from './CustomDatePicker'
import { CustomSelector } from './CustomSelector'
import { CustomInput } from './CustomInput'
import { ImageInput } from './ImageInput'

export const SignUpForm: VFC = () => {
  const {
    name,
    nameChange,
    email,
    emailChange,
    password,
    passwordChange,
    passwordConf,
    passwordConfChange,
    gender,
    genderChange,
    prefecture,
    prefectureChange,
    birthday,
    birthdayChange,
    image,
    preview,
    imageChange,
  } = useAuth()
  return (
    <>
      <div className="flex md:flex-row flex-col items-start md:space-x-5">
        <div className="flex flex-col">
          <label className="text-gray-400">Name:</label>
          <CustomInput value={name} onChange={nameChange} />
          <label className="text-gray-400">Email:</label>
          <CustomInput value={email} onChange={emailChange} />
        </div>
        <div className="flex flex-col">
          <label className="text-gray-400">Password:</label>
          <CustomInput value={password} onChange={passwordChange} />
          <label className="text-gray-400">PasswordConfirmation:</label>
          <CustomInput value={passwordConf} onChange={passwordConfChange} />
        </div>
        <div className="flex flex-col justify-between  space-y-3">
          <label className="text-gray-400">Gender:</label>
          <CustomSelector
            value={gender}
            onChange={genderChange}
            arrays={genders}
          />
          <label className="text-gray-400">Prefecture:</label>
          <CustomSelector
            value={prefecture}
            onChange={prefectureChange}
            arrays={prefectures}
          />
        </div>
        <div className="flex flex-col space-y-3">
          <label className="text-gray-400">Birthday:</label>
          <CustomDatePicker selected={birthday} onChange={birthdayChange} />
          <ImageInput onChange={imageChange} />
        </div>
      </div>
    </>
  )
}
