import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink to="/" className="main-nav__logo">
        <img className="main-nav__image" src={logo} alt="HRnet logo" />
        <div className="main-nav__text">
          <span className="main-nav__title">HRnet</span>
          <span className="main-nav__subtitle">Employee management</span>
        </div>
      </NavLink>
      <div>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'main-nav__link active' : 'main-nav__link'
          }
          to="/employees"
          end
        >
          Employee List
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? 'main-nav__link active' : 'main-nav__link'
          }
          to="/employees/create"
        >
          Create an employee
        </NavLink>
      </div>
    </nav>
  )
}

export default Header
