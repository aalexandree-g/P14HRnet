import { useState } from 'react'
import { NAME_REGEX } from '../data/form/formRegex'

/**
 * Custom React hook managing the employee creation form.
 *
 * It handles all form fields, validation logic (empty fields and name format),
 * and provides helper functions to check validity and reset the form.
 *
 * @returns {Object} An object containing:
 *
 * // ────────────────────────────────
 * // Form field values
 * // ────────────────────────────────
 * @property {string} firstName - Employee's first name.
 * @property {string} lastName - Employee's last name.
 * @property {Date|null} birthDate - Employee's date of birth.
 * @property {Date|null} startDate - Employee's start date.
 * @property {string} department - Employee's department.
 * @property {string} street - Street of the employee's address.
 * @property {string} city - City of the employee's address.
 * @property {string} stateValue - US state selected for the employee.
 * @property {string} zipCode - ZIP code of the employee's address.
 * @property {boolean} submitted - Indicates whether the form has been submitted at least once.
 *
 * // ────────────────────────────────
 * // Setters for form fields
 * // ────────────────────────────────
 * @property {Function} setFirstName - Updates the first name.
 * @property {Function} setLastName - Updates the last name.
 * @property {Function} setBirthDate - Updates the date of birth.
 * @property {Function} setStartDate - Updates the start date.
 * @property {Function} setDepartment - Updates the department.
 * @property {Function} setStreet - Updates the street.
 * @property {Function} setCity - Updates the city.
 * @property {Function} setStateValue - Updates the state.
 * @property {Function} setZipCode - Updates the ZIP code.
 * @property {Function} setSubmitted - Marks the form as submitted.
 *
 * // ────────────────────────────────
 * // Computed validation fields
 * // ────────────────────────────────
 * @property {boolean} hasEmptyField - True if one or more required fields are empty.
 * @property {boolean} hasInvalidName - True if first or last name does not match NAME_REGEX.
 *
 * // ────────────────────────────────
 * // Helper functions
 * // ────────────────────────────────
 * @property {Function} isFormValid - Returns true if the form is complete and valid.
 * @property {Function} resetForm - Resets all form fields to their initial values.
 */
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
