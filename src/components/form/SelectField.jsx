import { ChevronDown } from 'lucide-react'

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
