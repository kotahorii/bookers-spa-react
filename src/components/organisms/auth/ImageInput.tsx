import { ChangeEvent, useRef, VFC } from 'react'
import { PhotographIcon } from '@heroicons/react/solid'

type Props = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const ImageInput: VFC<Props> = ({ onChange }) => {
  const inputRef = useRef<any>(null)

  const fileUpload = () => {
    inputRef.current.click()
  }
  return (
    <>
      <PhotographIcon
        className="cursor-pointer w-8 text-gray-400 "
        onClick={fileUpload}
      />
      <input
        hidden
        ref={inputRef}
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </>
  )
}
