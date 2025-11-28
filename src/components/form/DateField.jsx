import { Calendar } from 'lucide-react'
import DatePicker from '@aalexandree-g/hrnet-plugin-datepicker'

const DateField = ({ id, label, value, onChange, error }) => {
  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <div className="form__date">
        <DatePicker
          id={id}
          className={`form__input ${error ? 'form__input--error' : ''}`}
          value={value}
          onChange={onChange}
        />
        <Calendar className="form__date__icon" />
      </div>
    </div>
  )
}

export default DateField
