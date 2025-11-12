import { Routes, Route, Navigate } from 'react-router-dom'
import EmployeeList from './pages/employeeList/EmployeeList'
import EmployeeCreate from './pages/employeeCreate/EmployeeCreate'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/employees" />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/create" element={<EmployeeCreate />} />
    </Routes>
  )
}

export default App
