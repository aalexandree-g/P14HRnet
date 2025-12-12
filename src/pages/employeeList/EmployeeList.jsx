import { useState, useMemo } from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { employeeTableStyles } from '../../components/ui/table/employeeTableStyles'
import { employeeColumns } from '../../components/ui/table/employeeColumns'

import Header from '../../components/header/Header'
import EmployeeSearchBar from '../../components/ui/search/EmployeeSearchBar'

/**
 * EmployeeList component.
 *
 * Displays the list of employees in a sortable, paginated data table
 * using `react-data-table-component`. Data is read from the Redux store.
 *
 * @returns {JSX.Element} The employee list page.
 */
const EmployeeList = () => {
  const employees = useSelector((state) => state.employees.list || [])
  const [searchText, setSearchText] = useState('')

  const filteredEmployees = useMemo(() => {
    const trimmed = searchText.trim()
    if (!trimmed) return employees

    const lower = trimmed.toLowerCase()

    const normalize = (value) => {
      if (value === null || value === undefined) return ''
      return value.toString().toLowerCase()
    }

    return employees.filter((employee) => {
      const searchable = [
        employee.firstName,
        employee.lastName,
        employee.birthDate,
        employee.startDate,
        employee.department,
        employee.street,
        employee.city,
        employee.state,
        employee.zipCode,
      ]
        .map(normalize)
        .join(' ')

      return searchable.includes(lower)
    })
  }, [employees, searchText])

  return (
    <>
      <Header />
      <div className="container list__container">
        <div className="list__header">
          <div className="list__title">
            <h1>Current Employees</h1>
            <span className="list__title__subtext">
              View the complete list of current employees
            </span>
          </div>
          <div className="list__actions">
            <EmployeeSearchBar
              value={searchText}
              onChange={setSearchText}
              onClear={() => setSearchText('')}
            />
          </div>
        </div>
        <div className="list__table">
          <DataTable
            columns={employeeColumns}
            data={filteredEmployees}
            pagination
            highlightOnHover
            responsive
            defaultSortFieldId={3}
            defaultSortAsc={false}
            customStyles={employeeTableStyles}
          />
        </div>
      </div>
    </>
  )
}

export default EmployeeList
