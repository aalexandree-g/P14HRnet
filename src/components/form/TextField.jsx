/**
 * TextField component.
 *
 * Renders a labeled text input with optional validation, placeholder,
 * pattern restriction, tooltip (`title`) and error styling.
 * The component supports any HTML input `type`, defaulting to `"text"`.
 *
 * @component
 *
 * @param {Object} props - Component properties.
 * @param {string} props.id - The HTML id for the input element.
 * @param {string} props.label - The text displayed above the input field.
 * @param {string} props.value - The current value of the input.
 * @param {(e: React.ChangeEvent<HTMLInputElement>) => void} props.onChange - Callback executed when the input value changes.
 * @param {string} [props.type="text"] - HTML input type (e.g., text, number, email).
 * @param {string} props.placeholder - Placeholder text displayed inside the input.
 * @param {string} [props.pattern] - Optional regex pattern for native HTML validation.
 * @param {string} [props.title] - Tooltip / browser validation message when pattern fails.
 * @param {boolean} props.error - Whether the field should display an error state.
 *
 * @returns {JSX.Element} A styled text input field with label.
 */
const TextField = ({
  id,
  label,
  value,
  onChange,
  type = 'text',
  placeholder,
  pattern,
  title,
  error,
}) => {
  return (
    <div className="form__field">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <input
        id={id}
        className={`form__input ${error ? 'form__input--error' : ''}`}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        pattern={pattern}
        title={title}
      />
    </div>
  )
}

export default TextField
