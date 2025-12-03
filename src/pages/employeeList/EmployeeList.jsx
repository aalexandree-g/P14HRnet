import { useSelector } from 'react-redux'
import DataTable from 'react-data-table-component'
import { employeeTableStyles } from '../../components/ui/config/employeeTableStyles'
import { employeeColumns } from '../../components/ui/config/employeeColumns'

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
            columns={employeeColumns}
            data={employees}
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
