import PropTypes from 'prop-types'
import DatePicker from 'react-datepicker'
import { Calendar } from 'lucide-react'
import 'react-datepicker/dist/react-datepicker.css'

/**
 * DateField component.
 *
 * Reusable date input field based on `react-datepicker`.
 * Displays a labeled date picker with a calendar icon and optional error state.
 * The selected value is handled as a JavaScript `Date` object.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - Unique identifier used for the input and its associated label.
 * @param {string} props.label - Text label displayed above the date field.
 * @param {Date|null} [props.value] - Currently selected date.
 * @param {(date: Date|null) => void} props.onChange - Callback fired when the date changes.
 * @param {boolean} [props.error=false] - Indicates whether the field is in an error state.
 *
 * @returns {JSX.Element} Rendered date field component.
 */
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
          placeholderText="Pick a date"
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
