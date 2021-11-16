import { ChangeEvent, VFC } from 'react'

type Props = {
  value: number
  onChange: (
    e: ChangeEvent<{
      value: unknown
    }>
  ) => any
  arrays: string[]
}

export const CustomSelector: VFC<Props> = ({ value, onChange, arrays }) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className="mb-3 px-3 py-1 rounded-lg shadow-lg text-gray-400 bg-gray-600 cursor-pointer"
      >
        {arrays.map((array, index) => (
          <option key={index + 1} value={index + 1}>
            {array}
          </option>
        ))}
      </select>
    </div>
  )
}
