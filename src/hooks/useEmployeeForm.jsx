import { useState } from 'react'
import { NAME_REGEX } from '../data/formRegex'

export const useEmployeeForm = () => {
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

  const hasEmptyField =
    !firstName ||
    !lastName ||
    !birthDate ||
    !startDate ||
    !department ||
    !street ||
    !city ||
    !stateValue ||
    !zipCode

  const hasInvalidName =
    !NAME_REGEX.test(firstName) || !NAME_REGEX.test(lastName)

  const isFormValid = () => {
    return !hasEmptyField && !hasInvalidName
  }

  const resetForm = () => {
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

  return {
    firstName,
    lastName,
    birthDate,
    startDate,
    department,
    street,
    city,
    stateValue,
    zipCode,
    submitted,

    setFirstName,
    setLastName,
    setBirthDate,
    setStartDate,
    setDepartment,
    setStreet,
    setCity,
    setStateValue,
    setZipCode,
    setSubmitted,

    hasEmptyField,
    hasInvalidName,
    isFormValid,

    resetForm,
  }
}
