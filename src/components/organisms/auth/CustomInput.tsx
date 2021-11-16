import { VFC } from 'react'

type Props = {
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => any
}

export const CustomInput: VFC<Props> = ({ value, onChange }) => {
  return (
    <input
      type="text"
      placeholder="name"
      className="my-3 px-3 py-1 bg-gray-600 text-gray-400 rounded-lg border border-gray-500"
      value={value}
      onChange={onChange}
    />
  )
}
