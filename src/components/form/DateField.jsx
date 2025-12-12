import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { Calendar } from 'lucide-react'
import 'react-datepicker/dist/react-datepicker.css'

const DateField = ({ id, label, value, onChange, error }) => {
  return (
    <div className="form__field">
      <label htmlFor={id} className="form__label">
        {label}
      </label>

      <div className="form__date">
        <DatePicker
          id={id}
          selected={value || null}
          onChange={onChange}
          dateFormat="dd/MM/yyyy"
          placeholderText="Select a date"
          className={`form__input ${error ? 'form__input--error' : ''}`}
          autoComplete="off"
          popperPlacement="bottom-start"
        />
        <Calendar className="form__date__icon" aria-hidden="true" />
      </div>
    </div>
  )
}

DateField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.instanceOf(Date),
  onChange: PropTypes.func.isRequired,
  error: PropTypes.bool,
}

export default DateField
