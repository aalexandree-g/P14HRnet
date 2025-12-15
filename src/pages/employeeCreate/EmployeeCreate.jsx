import { useDispatch } from 'react-redux'
import { addEmployee } from '../../store/employeesSlice'

import Header from '../../components/header/Header'
import TextField from '../../components/form/TextField'
import DateField from '../../components/form/DateField'
import SelectField from '../../components/form/SelectField'
import { HrnetModal } from '@aalexandree-g/hrnet-modal'

import { useEmployeeForm } from '../../hooks/useEmployeeForm'
import { useEmployeeModal } from '../../hooks/useEmployeeModal'

import { DEPARTMENTS, US_STATES } from '../../data/form/formSelectData'
import { NAME_REGEX, ZIPCODE_REGEX } from '../../data/form/formRegex'

import {
  formatName,
  formatAddress,
  formatZipcode,
  toDateString,
} from '../../utils/formFormatters'

/**
 * EmployeeCreate page.
 *
 * React page responsible for creating a new employee.
 * It renders a complete employee creation form, handles validation,
 * dispatches the new employee to the Redux store, and provides user feedback
 * through an accessible modal dialog.
 *
 * The component relies on:
 * - `useEmployeeForm` for form state management and validation logic
 * - `useEmployeeModal` for modal state and feedback messages
 * - Redux Toolkit for persisting employees in the global store
 *
 * Form data is validated and formatted before submission.
 * Date values are handled as JavaScript `Date` objects and converted
 * to formatted strings only at submission time.
 *
 * @component
 *
 * @returns {JSX.Element} Employee creation page.
 */
const EmployeeCreate = () => {
  const dispatch = useDispatch()
  const { modalConfig, showError, showSuccess, closeModal } = useEmployeeModal()
  const {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    birthDate,
    setBirthDate,
    startDate,
    setStartDate,
    department,
    setDepartment,
    street,
    setStreet,
    city,
    setCity,
    stateValue,
    setStateValue,
    zipCode,
    setZipCode,
    submitted,
    setSubmitted,
    isFormValid,
    resetForm,
  } = useEmployeeForm()

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    if (!isFormValid()) {
      showError()
      return
    }

    const newEmployee = {
      firstName,
      lastName,
      birthDate: toDateString(birthDate),
      startDate: toDateString(startDate),
      department,
      street,
      city,
      state: stateValue,
      zipCode,
    }

    dispatch(addEmployee(newEmployee))
    showSuccess(firstName, lastName)
    resetForm()
  }

  return (
    <>
      <Header />
      <div className="form__body">
        <div className="container form__container">
          <div className="form__title">
            <h1>Create Employee</h1>
            <span className="form__title__subtext">
              Add a new employee to the company directory
            </span>
          </div>
          <form className="form" onSubmit={handleSubmit}>
            {/* NAMES */}
            <div className="form__line">
              <TextField
                id="firstname"
                label="First Name"
                value={firstName}
                onChange={(e) => setFirstName(formatName(e.target.value))}
                placeholder="John"
                title="Only letters, apostrophes, spaces and hyphens are allowed"
                error={submitted && !NAME_REGEX.test(firstName)}
              />
              <TextField
                id="lastname"
                label="Last Name"
                value={lastName}
                onChange={(e) => setLastName(formatName(e.target.value))}
                placeholder="Doe"
                title="Only letters, apostrophes, spaces and hyphens are allowed"
                error={submitted && !NAME_REGEX.test(lastName)}
              />
            </div>
            {/* BIRTHDATE */}
            <div className="form__line">
              <DateField
                id="birthdate"
                label="Date of Birth"
                value={birthDate}
                onChange={setBirthDate}
                error={submitted && !birthDate}
              />
            </div>
            {/* START DATE */}
            <div className="form__line">
              <DateField
                id="startdate"
                label="Start Date"
                value={startDate}
                onChange={setStartDate}
                error={submitted && !startDate}
              />
            </div>
            {/* DEPARTMENT */}
            <div className="form__line">
              <SelectField
                id="department"
                label="Department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                options={DEPARTMENTS}
                placeholder="Select a department"
                error={submitted && !department}
              />
            </div>
            {/* ADDRESS */}
            <div className="form__line">
              <TextField
                id="street"
                label="Street"
                value={street}
                onChange={(e) => setStreet(formatAddress(e.target.value))}
                placeholder="123 Main St"
                title={'Enter your address'}
                error={submitted && !street}
              />
            </div>
            <div className="form__line">
              <TextField
                id="city"
                label="City"
                value={city}
                onChange={(e) => setCity(formatName(e.target.value))}
                placeholder="New York"
                title={'Enter your city'}
                error={submitted && !NAME_REGEX.test(city)}
              />
              <SelectField
                id="state"
                label="State"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                options={US_STATES}
                placeholder="Select a state"
                error={submitted && !stateValue}
              />
              <TextField
                id="zipcode"
                label="ZIP Code"
                value={zipCode}
                onChange={(e) => setZipCode(formatZipcode(e.target.value))}
                placeholder="10001"
                pattern="^[0-9]{5}$"
                title={'ZIP code must contain exactly 5 digits'}
                error={submitted && !ZIPCODE_REGEX.test(zipCode)}
              />
            </div>
            {/* SUBMIT BUTTON */}
            <button type="submit" className="form__button">
              Create Employee
            </button>
          </form>
        </div>
        {/* MODAL */}
        <HrnetModal
          isOpen={modalConfig.isOpen}
          title={modalConfig.title}
          message={modalConfig.message}
          variant={modalConfig.variant}
          onClose={closeModal}
        />
      </div>
    </>
  )
}

export default EmployeeCreate
