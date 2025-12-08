export const employeeColumns = [
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
    name: 'Date of Birth',
    selector: (row) => (row.birthDate ? new Date(row.birthDate).getTime() : 0),
    sortable: true,
    cell: (row) =>
      row.birthDate ? new Date(row.birthDate).toLocaleDateString() : '',
  },

  // --- Hidden on mobile  ---
  {
    name: 'Start Date',
    selector: (row) => (row.startDate ? new Date(row.startDate).getTime() : 0),
    sortable: true,
    cell: (row) =>
      row.startDate ? new Date(row.startDate).toLocaleDateString() : '',
    hide: 'sm',
  },
  {
    name: 'Department',
    selector: (row) => row.department,
    sortable: true,
    width: '13%',
    hide: 'sm',
  },
  {
    name: 'Street',
    selector: (row) => row.street,
    width: '17%',
    hide: 'md',
  },
  {
    name: 'City',
    selector: (row) => row.city,
    sortable: true,
    hide: 'md',
  },
  {
    name: 'State',
    selector: (row) => row.state,
    hide: 'md',
  },
  {
    name: 'ZIP Code',
    selector: (row) => row.zipCode,
    hide: 'md',
  },
]
