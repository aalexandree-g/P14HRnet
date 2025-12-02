import { ChevronDown } from 'lucide-react'

/**
 * SelectField component.
 *
 * Renders a labeled `<select>` dropdown with a custom icon and error styling.
 * Displays a placeholder as the first disabled option and maps the provided
 * `options` array to selectable `<option>` elements.
 *
 * @component
 *
 * @param {Object} props - Component props.
 * @param {string} props.id - The HTML id of the select element.
 * @param {string} props.label - The label displayed above the field.
 * @param {string} props.value - The currently selected value.
 * @param {(e: React.ChangeEvent<HTMLSelectElement>) => void} props.onChange - Callback fired when the selected option changes.
 * @param {string[]} props.options - Array of selectable options.
 * @param {string} props.placeholder - Text displayed when no value is selected.
 * @param {boolean} props.error - Indicates whether the field is in an error state.
 *
 * @returns {JSX.Element} A styled select field with label and dropdown icon.
 */
const SelectField = ({
  id,
  label,
  value,
  onChange,
  options,
  placeholder,
  error,
}) => {
  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <div className="form__date">
        <select
          id={id}
          className={`form__input ${error ? 'form__input--error' : ''}`}
          value={value}
          onChange={onChange}
        >
          <option value="" disabled hidden>
            {placeholder}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
        <ChevronDown className="form__date__icon" />
      </div>
    </div>
  )
}

export default SelectField
