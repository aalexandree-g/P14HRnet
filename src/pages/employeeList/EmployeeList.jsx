// src/pages/employeeList/EmployeeList.jsx
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'

import Header from '../../components/header/Header'

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

  const customStyles = {
    table: {
      style: {
        fontFamily: 'inherit',
        backgroundColor: '#ffffff',
        border: '1px solid #e8e8e8',
        borderRadius: '1rem',
        overflow: 'hidden',
        width: '100%',
      },
    },
    headRow: {
      style: {
        backgroundColor: '#ffffff',
        borderBottom: '2px solid #ddd',
        fontWeight: '600',
      },
    },
    rows: {
      style: {
        '&:hover': {
          backgroundColor: '#38a422ff',
        },
      },
    },
    pagination: {
      style: {
        backgroundColor: 'transparent',
        borderTopStyle: 'none',
      },
    },
  }

  const columns = useMemo(
    () => [
      {
        name: 'First Name',
        selector: (row) => row.firstName,
        sortable: true,
      },
      {
        name: 'Last Name',
        selector: (row) => row.lastName,
        sortable: true,
      },
      {
        name: 'Start Date',
        selector: (row) =>
          row.startDate ? new Date(row.startDate).getTime() : 0,
        sortable: true,
        cell: (row) =>
          row.startDate ? new Date(row.startDate).toLocaleDateString() : '',
      },
      {
        name: 'Department',
        selector: (row) => row.department,
        sortable: true,
      },
      {
        name: 'Date of Birth',
        selector: (row) =>
          row.birthDate ? new Date(row.birthDate).getTime() : 0,
        sortable: true,
        cell: (row) =>
          row.birthDate ? new Date(row.birthDate).toLocaleDateString() : '',
      },
      {
        name: 'Street',
        selector: (row) => row.street,
        width: '17%',
      },
      {
        name: 'City',
        selector: (row) => row.city,
        sortable: true,
      },
      {
        name: 'State',
        selector: (row) => row.state,
      },
      {
        name: 'ZIP Code',
        selector: (row) => row.zipCode,
      },
    ],
    []
  )

  return (
    <>
      <Header />
      <div className="container list__container">
        <div className="list__title">
          <h1>Current Employees</h1>
          <span className="list__title__subtext">
            Add a new employee to the company directory
          </span>
        </div>
        <div className="list__table">
          <DataTable
            columns={columns}
            data={employees}
            pagination
            highlightOnHover
            responsive
            defaultSortFieldId={3}
            defaultSortAsc={false}
            customStyles={customStyles}
          />
        </div>
      </div>
    </>
  )
}

export default EmployeeList
