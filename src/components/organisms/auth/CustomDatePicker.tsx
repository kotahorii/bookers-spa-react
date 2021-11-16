import DatePicker, { registerLocale } from 'react-datepicker'
import ja from 'date-fns/locale/ja'
import 'react-datepicker/dist/react-datepicker.css'
import { VFC } from 'react'

type Props = {
  selected: Date | null
  onChange: (date: Date | null) => any
}
export const CustomDatePicker: VFC<Props> = ({ selected, onChange }) => {
  registerLocale('ja', ja)
  return (
    <DatePicker
      className="py-1 pl-2 rounded-lg bg-gray-600 text-gray-400 cursor-pointer"
      dateFormat="yyyy/MM/dd"
      selected={selected}
      locale="ja"
      onChange={onChange}
    />
  )
}
