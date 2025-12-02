import { Calendar } from 'lucide-react'
import DatePicker from '@aalexandree-g/hrnet-plugin-datepicker'

/**
 * DateField component.
 *
 * Renders a labeled date input using the custom DatePicker plugin.
 * Includes an icon from Lucide and applies an error style if the field is invalid.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - The unique identifier for the input element.
 * @param {string} props.label - The label displayed above the date picker.
 * @param {Date|null} props.value - The currently selected date value.
 * @param {(date: Date|null) => void} props.onChange - Callback fired when the user selects a date.
 * @param {boolean} props.error - Whether the field is currently in an error state.
 *
 * @returns {JSX.Element} A styled date picker field with label and icon.
 */
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
