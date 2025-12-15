const DATA_SOURCE = './employeesMock.js'
// const DATA_SOURCE = 'https://api.example.com/employees'

export const loadEmployees = async () => {
  // API
  if (DATA_SOURCE.startsWith('http')) {
    const response = await fetch(DATA_SOURCE)
    if (!response.ok) {
      throw new Error('Failed to fetch employees')
    }
    return response.json()
  }

  // Local JS file
  const module = await import(DATA_SOURCE)
  return module.default
}
