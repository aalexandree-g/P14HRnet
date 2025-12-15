import { useEffect, useState, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { loadEmployees } from '../../data/employees/employeesSource'
import { setEmployees } from '../../store/employeesSlice'
import { employeeTableStyles } from '../../components/ui/table/employeeTableStyles'
import { employeeColumns } from '../../components/ui/table/employeeColumns'

import Header from '../../components/header/Header'
import EmployeeSearchBar from '../../components/ui/search/EmployeeSearchBar'

const SEARCH_FIELDS = [
  'firstName',
  'lastName',
  'birthDate',
  'startDate',
  'street',
  'department',
  'city',
  'state',
  'zipCode',
]

const EmployeeList = () => {
  const dispatch = useDispatch()
  const employees = useSelector((state) => state.employees.list)
  const [searchText, setSearchText] = useState('')

  useEffect(() => {
    if (employees.length > 0) return

    loadEmployees()
      .then((data) => dispatch(setEmployees(data)))
      .catch(console.error)
  }, [dispatch, employees.length])

  const filteredEmployees = useMemo(() => {
    const trimmed = searchText.trim()
    if (!trimmed) return employees

    const lower = trimmed.toLowerCase()

    return employees.filter((employee) =>
      SEARCH_FIELDS.map((key) => employee[key] ?? '')
        .join(' ')
        .toLowerCase()
        .includes(lower)
    )
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
