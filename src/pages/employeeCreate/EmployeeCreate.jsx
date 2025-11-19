import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addEmployee } from '../../store/employeesSlice'
import Header from '../../components/header/Header'
import { Calendar } from 'lucide-react'
import DatePicker from 'p14hrnet-plugin'

const formatDate = (date) => {
  if (!date) return null
  return date.toLocaleDateString('fr-FR') // "dd/mm/yyyy"
}

const EmployeeCreate = () => {
  const dispatch = useDispatch()

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [birthDate, setBirthDate] = useState(null)
  const [startDate, setStartDate] = useState(null)
  const [street, setStreet] = useState('')
  const [city, setCity] = useState('')
  const [stateValue, setStateValue] = useState('')
  const [zipCode, setZipCode] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEmployee = {
      firstName,
      lastName,
      birthDate: formatDate(birthDate),
      startDate: formatDate(startDate),
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
    setStreet('')
    setCity('')
    setStateValue('')
    setZipCode('')
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
            <div className="form__field">
              <label className="form__label" htmlFor="firstname">
                First Name
              </label>
              <input
                className="form__input"
                type="text"
                pattern="[A-Za-zÀ-ÿ\s-]+"
                title="Only letters are allowed"
                id="firstname"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="John"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="lastname">
                Last Name
              </label>
              <input
                className="form__input"
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Doe"
                required
              />
            </div>
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
                  className="form__input"
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
              <label className="form__label" htmlFor="birthdate">
                Start Date
              </label>
              <div className="form__date">
                <DatePicker
                  id="startdate"
                  className="form__input"
                  value={startDate}
                  onChange={setStartDate}
                />
                <Calendar className="form__date__icon" />
              </div>
            </div>
          </div>
          {/* ADDRESS */}
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="street">
                Street
              </label>
              <input
                className="form__input"
                type="text"
                id="street"
                value={street}
                onChange={(e) => setStreet(e.target.value)}
                placeholder="123 Main St"
                required
              />
            </div>
          </div>
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="city">
                City
              </label>
              <input
                className="form__input"
                type="text"
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="New York"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="state">
                State
              </label>
              <input
                className="form__input"
                type="text"
                id="state"
                value={stateValue}
                onChange={(e) => setStateValue(e.target.value)}
                placeholder="Florida"
                required
              />
            </div>
            <div className="form__field">
              <label className="form__label" htmlFor="zipcode">
                ZIP Code
              </label>
              <input
                className="form__input"
                type="text"
                id="zipcode"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                placeholder="10001"
                required
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
