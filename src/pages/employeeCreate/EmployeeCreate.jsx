import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../store/employeesSlice'
import Header from '../../components/header/Header'
import FormInput from '../../components/form/FormInput'
import { Calendar } from 'lucide-react'
import DatePicker from '@aalexandree-g/hrnet-plugin-datepicker'

const NAME_REGEX = /^[A-Za-zÀ-ÿ'\s-]+$/

const EmployeeCreate = () => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [department, setDepartment] = useState('')
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateValue, setStateValue] = useState('')
  const [zipCode, setZipCode] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)

    if (
      !firstName ||
      !lastName ||
      !birthDate ||
      !startDate ||
      !department ||
      !street ||
      !city ||
      !stateValue ||
      !zipCode
    ) {
      alert('Please fill in all fields')
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
    alert('Employee saved!')

    setFirstName('')
    setLastName('')
    setBirthDate(null)
    setStartDate(null)
    setDepartment('')
    setStreet('')
    setCity('')
    setStateValue('')
    setZipCode('')

    setSubmitted(false)
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
            <FormInput
              id="firstname"
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="John"
              pattern="^[A-Za-zÀ-ÿ'\s-]+$"
              title="Only letters, apostrophes, spaces and hyphens are allowed"
              error={submitted && !NAME_REGEX.test(firstName)}
            />
            <FormInput
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
            <div className="form__field">
              <label className="form__label" htmlFor="birthdate">
                Date of Birth
              </label>
              <div className="form__date">
                <DatePicker
                  id="birthdate"
                  className={`form__input ${submitted && !birthDate ? 'form__input--error' : ''}`}
                  value={birthDate}
                  onChange={setBirthDate}
                />
                <Calendar className="form__date__icon" />
              </div>
            </div>
          </div>

          {/* START DATE */}
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="startdate">
                Start Date
              </label>
              <div className="form__date">
                <DatePicker
                  id="startdate"
                  className={`form__input ${submitted && !startDate ? 'form__input--error' : ''}`}
                  value={startDate}
                  onChange={setStartDate}
                />
                <Calendar className="form__date__icon" />
              </div>
            </div>
          </div>
          {/* DEPARTMENT */}
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="department">
                Department
              </label>
              <input
                className={`form__input ${submitted && !department ? 'form__input--error' : ''}`}
                type="text"
                id="department"
                value={department}
                onChange={(e) => setDepartment(e.target.value)}
                placeholder="Sales"
              />
            </div>
          </div>
          {/* ADDRESS */}
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="street">
                Street
              </label>
              <input
                className={`form__input ${submitted && !street ? 'form__input--error' : ''}`}
                type="text"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="123 Main St"
              />
            </div>
          </div>
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="city">
                City
              </label>
              <input
                className={`form__input ${submitted && !city ? 'form__input--error' : ''}`}
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="New York"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="state">
                State
              </label>
              <input
                className={`form__input ${submitted && !stateValue ? 'form__input--error' : ''}`}
                type="text"
                id="state"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                placeholder="Florida"
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="zipcode">
                ZIP Code
              </label>
              <input
                className={`form__input ${submitted && !zipCode ? 'form__input--error' : ''}`}
                type="text"
                id="zipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="10001"
                pattern="^[0-9]{5}$"
                title="ZIP code must contain exactly 5 digits"
              />
            </div>
          </div>
          {/* SUBMIT BUTTON */}
          <button type="submit" className="form__button">
            Create Employee
          </button>
        </form>
      </div>
    </>
  )
}

export default EmployeeCreate
