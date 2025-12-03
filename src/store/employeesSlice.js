import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [
    {
      firstName: 'Michael',
      lastName: 'Anderson',
      birthDate: new Date('1984-06-12'),
      startDate: new Date('2015-03-01'),
      department: 'Engineering',
      street: '742 Evergreen Terrace',
      city: 'Springfield',
      state: 'Illinois',
      zipCode: '62701',
    },
    {
      firstName: 'Emma',
      lastName: 'Roberts',
      birthDate: new Date('1991-11-23'),
      startDate: new Date('2021-07-12'),
      department: 'Marketing',
      street: '15 Sunset Boulevard',
      city: 'Los Angeles',
      state: 'California',
      zipCode: '90001',
    },
    {
      firstName: 'Lucas',
      lastName: 'Martinez',
      birthDate: new Date('1988-02-04'),
      startDate: new Date('2019-01-15'),
      department: 'Human Resources',
      street: '410 Cherry Lane',
      city: 'Austin',
      state: 'Texas',
      zipCode: '73301',
    },
    {
      firstName: 'Sophia',
      lastName: 'Nguyen',
      birthDate: new Date('1995-04-19'),
      startDate: new Date('2022-09-05'),
      department: 'Legal',
      street: '88 Harbor Street',
      city: 'Seattle',
      state: 'Washington',
      zipCode: '98101',
    },
    {
      firstName: 'Benjamin',
      lastName: 'Clark',
      birthDate: new Date('1979-01-30'),
      startDate: new Date('2010-11-20'),
      department: 'Sales',
      street: '320 Maple Avenue',
      city: 'Boston',
      state: 'Massachusetts',
      zipCode: '02108',
    },
    {
      firstName: 'Daniel',
      lastName: 'Turner',
      birthDate: new Date('1987-05-08'),
      startDate: new Date('2018-02-10'),
      department: 'Engineering',
      street: '12 Brookside Drive',
      city: 'Denver',
      state: 'Colorado',
      zipCode: '80014',
    },
    {
      firstName: 'Olivia',
      lastName: 'King',
      birthDate: new Date('1993-08-27'),
      startDate: new Date('2020-11-03'),
      department: 'Sales',
      street: '901 Pine Street',
      city: 'Portland',
      state: 'Oregon',
      zipCode: '97205',
    },
    {
      firstName: 'Henry',
      lastName: 'Mitchell',
      birthDate: new Date('1982-03-16'),
      startDate: new Date('2017-04-14'),
      department: 'Engineering',
      street: '77 Oakwood Road',
      city: 'Columbus',
      state: 'Ohio',
      zipCode: '43004',
    },
    {
      firstName: 'Ava',
      lastName: 'Sullivan',
      birthDate: new Date('1990-10-11'),
      startDate: new Date('2019-08-21'),
      department: 'Human Resources',
      street: '55 Greenway Avenue',
      city: 'Miami',
      state: 'Florida',
      zipCode: '33101',
    },
    {
      firstName: 'Jack',
      lastName: 'Reynolds',
      birthDate: new Date('1994-02-02'),
      startDate: new Date('2022-01-09'),
      department: 'Legal',
      street: '302 Willow Court',
      city: 'Phoenix',
      state: 'Arizona',
      zipCode: '85004',
    },
    {
      firstName: 'Grace',
      lastName: 'Carter',
      birthDate: new Date('1989-09-25'),
      startDate: new Date('2016-06-18'),
      department: 'Marketing',
      street: '64 Birchwood Lane',
      city: 'Nashville',
      state: 'Tennessee',
      zipCode: '37201',
    },
    {
      firstName: 'Ethan',
      lastName: 'Brooks',
      birthDate: new Date('1980-07-03'),
      startDate: new Date('2013-03-27'),
      department: 'Legal',
      street: '210 Riverbend Drive',
      city: 'Chicago',
      state: 'Illinois',
      zipCode: '60604',
    },
    {
      firstName: 'Chloe',
      lastName: 'Henderson',
      birthDate: new Date('1996-12-06'),
      startDate: new Date('2021-05-30'),
      department: 'Sales',
      street: '98 Meadow Park',
      city: 'San Diego',
      state: 'California',
      zipCode: '92103',
    },
  ],
}

/**
 * Redux slice responsible for managing the list of employees.
 *
 * State shape:
 * {
 *   list: Array<Object> // Array of employee objects created from the form
 * }
 */
const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    /**
     * Adds a new employee to the list.
     *
     * @param {Object} state - Current employees state.
     * @param {{ payload: Object }} action - Redux action containing the new employee.
     */
    addEmployee: (state, action) => {
      state.list.push(action.payload)
    },
  },
})

export const { addEmployee } = employeesSlice.actions
export default employeesSlice.reducer
