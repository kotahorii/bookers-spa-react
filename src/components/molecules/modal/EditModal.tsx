import { useAuth } from 'hooks/useAuth'
import { useMain } from 'hooks/useMain'
import { CustomButton } from 'components/atoms/CustomButton'
import { prefectures } from 'data/prefectures'
import { CustomInput } from 'components/organisms/auth/CustomInput'
import { CustomSelector } from 'components/organisms/auth/CustomSelector'
import { ImageInput } from 'components/organisms/auth/ImageInput'
import { ImagePreview } from 'components/organisms/auth/ImagePreview'

export const EditModalText = () => {
  const { profile, profileChange, updateUser, closeModal } = useMain()
  const {
    name,
    nameChange,
    prefecture,
    prefectureChange,
    preview,
    resetPreview,
    imageChange,
  } = useAuth()

  return (
    <form className="mt-2 flex flex-col" onSubmit={updateUser}>
      <div>
        <p>name:</p>
        <CustomInput value={name} onChange={nameChange} placeholder="name" />
      </div>
      <p>profile:</p>
      <CustomInput
        value={profile}
        onChange={profileChange}
        placeholder="profile"
      />
      <CustomSelector
        value={prefecture}
        onChange={prefectureChange}
        arrays={prefectures}
      />
      <div className="flex-row flex w-full items-center space-x-5">
        <ImageInput onChange={imageChange} />
        <ImagePreview preview={preview} resetPreview={resetPreview} />
      </div>
      <div className="mt-4 flex flex-col items-center">
        <CustomButton text="update" type="submit" onClick={closeModal} />
      </div>
    </form>
  )
}
