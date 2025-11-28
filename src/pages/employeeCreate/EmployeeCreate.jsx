import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../store/employeesSlice'

import Header from '../../components/header/Header'
import TextField from '../../components/form/TextField'
import DateField from '../../components/form/DateField'
import SelectField from '../../components/form/SelectField'
import UiModal from '../../components/ui/UiModal'
import { CircleAlert, CircleCheckBig } from 'lucide-react'

import { useEmployeeForm } from '../../hooks/useEmployeeForm'
import { NAME_REGEX } from '../../data/formRegex'
import { DEPARTMENTS, US_STATES } from '../../data/formSelectData'

const EmployeeCreate = () => {
  const dispatch = useDispatch()

  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    variant: 'success',
  })

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
      setModalConfig({
        isOpen: true,
        title: <CircleAlert size={50} />,
        message: 'Please fill in all fields correctly.',
        variant: 'error',
      })

      return
    }

    const newEmployee = {
      firstName,
      lastName,
      birthDate,
      startDate,
      department,
      street,
      city,
      state: stateValue,
      zipCode,
    }

    dispatch(addEmployee(newEmployee))
    setModalConfig({
      isOpen: true,
      title: <CircleCheckBig size={50} />,
      message: 'The new employee has been added to the company directory.',
      variant: 'success',
    })

    resetForm()
  }

  const closeModal = () => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }))
  }

  return (
    <>
      <Header />
      <div className="form__container">
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
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              pattern="^[A-Za-zÀ-ÿ'\s-]+$"
              title="Only letters, apostrophes, spaces and hyphens are allowed"
              error={submitted && !NAME_REGEX.test(firstName)}
            />
            <TextField
              id="lastname"
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Doe"
              pattern="^[A-Za-zÀ-ÿ'\s-]+$"
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
              onChange={(e) => setStreet(e.target.value)}
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
              onChange={(e) => setCity(e.target.value)}
              placeholder="New York"
              title={'Enter your city'}
              error={submitted && !city}
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
              onChange={(e) => setZipCode(e.target.value)}
              placeholder="10001"
              pattern="^[0-9]{5}$"
              title={'ZIP code must contain exactly 5 digits'}
              error={submitted && !zipCode}
            />
          </div>
          {/* SUBMIT BUTTON */}
          <button type="submit" className="form__button">
            Create Employee
          </button>
        </form>
      </div>
      {/* MODAL */}
      <UiModal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        variant={modalConfig.variant}
        onClose={closeModal}
      />
    </>
  )
}

export default EmployeeCreate
