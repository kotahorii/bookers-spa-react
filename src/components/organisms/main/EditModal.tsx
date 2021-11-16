import { Dialog, Transition } from '@headlessui/react'
import { CustomButton } from 'components/atoms/CustomButton'
import { prefectures } from 'data/prefectures'
import { useAuth } from 'hooks/useAuth'
import { useMain } from 'hooks/useMain'
import { Fragment } from 'react'
import { CustomInput } from '../auth/CustomInput'
import { CustomSelector } from '../auth/CustomSelector'
import { ImageInput } from '../auth/ImageInput'
import { ImagePreview } from '../auth/ImagePreview'

export const EditModal = () => {
  const { isOpen, closeModal, profile, profileChange, updateUser } = useMain()
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
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-10 overflow-y-auto"
        onClose={closeModal}
      >
        <div className="min-h-screen px-4 text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0" />
          </Transition.Child>
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="inline-block text-gray-400 bg-gray-600 p-6 my-8 overflow-hidden text-left align-middle transition-all transform shadow-xl rounded-2xl">
              <Dialog.Title as="h3" className="text-lg font-medium leading-6">
                Update Profile
              </Dialog.Title>
              <form className="mt-2 flex flex-col" onSubmit={updateUser}>
                <div>
                  <p>name:</p>
                  <CustomInput
                    value={name}
                    onChange={nameChange}
                    placeholder="name"
                  />
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
                  <CustomButton
                    text="update"
                    type="submit"
                    onClick={closeModal}
                  />
                </div>
              </form>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}
