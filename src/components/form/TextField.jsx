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
