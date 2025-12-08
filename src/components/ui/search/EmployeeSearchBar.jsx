import PropTypes from 'prop-types'

const EmployeeSearchBar = ({ value, onChange, onClear }) => {
  return (
    <div className="employee-search">
      <label htmlFor="employee-search" className="sr-only">
        Search :
      </label>

      <div className="employee-search__wrapper">
        <input
          id="employee-search"
          type="text"
          className="employee-search__input"
          placeholder="Search by name, department, city..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />

        {value && (
          <button
            type="button"
            className="employee-search__clear"
            onClick={onClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </div>
  )
}

EmployeeSearchBar.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onClear: PropTypes.func.isRequired,
}

export default EmployeeSearchBar
