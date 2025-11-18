import { useState } from 'react'
import Header from '../../components/header/Header'
import { Calendar } from 'lucide-react'
import DatePicker from 'p14hrnet-plugin'

const EmployeeCreate = () => {
  const [birthDate, setBirthDate] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Birth date:', birthDate)
    // tu ajoutes ensuite cette date dans ton objet employé
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
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="firstname">
                First Name
              </label>
              <input
                className="form__input"
                type="text"
                id="firstname"
                value=""
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
                value=""
                placeholder="Doe"
                required
              />
            </div>
          </div>
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="birthdate">
                Date of Birth
              </label>
              <div className="form__date">
                <input
                  className="form__input"
                  type="text"
                  id="birthdate"
                  value=""
                  placeholder="Pick a date"
                  required
                />
                <Calendar className="form__date__icon" />
              </div>
            </div>
          </div>

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

          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="startdate">
                Start Date
              </label>
              <div className="form__date">
                <input
                  className="form__input"
                  type="text"
                  id="startdate"
                  value=""
                  placeholder="Pick a date"
                  required
                />
                <Calendar className="form__date__icon" />
              </div>
            </div>
          </div>
          <div className="form__line">
            <div className="form__field">
              <label className="form__label" htmlFor="street">
                Street
              </label>
              <input
                className="form__input"
                type="text"
                id="street"
                value=""
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
                value=""
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
                value=""
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
                value=""
                placeholder="10001"
                required
              />
            </div>
          </div>
          <button type="submit" className="form__button">
            Create Employee
          </button>
        </form>
      </div>
    </>
  )
}

export default EmployeeCreate
