import { NavLink } from 'react-router-dom'
import { Users, UserPlus } from 'lucide-react'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <nav className="main-nav">
      <div className="main-nav__container container">
        <NavLink to="/" className="main-nav__logo">
          <img className="main-nav__image" src={logo} alt="HRnet logo" />
          <div className="main-nav__text">
            <span className="main-nav__title">HRnet</span>
            <span className="main-nav__subtitle">Employee management</span>
          </div>
        </NavLink>
        <div className="main-nav__links">
          <NavLink
            className={({ isActive }) =>
              isActive ? 'main-nav__link active' : 'main-nav__link'
            }
            to="/employees"
            end
          >
            <Users strokeWidth={2.5} className="main-nav__icon" />
            Employee List
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'main-nav__link active' : 'main-nav__link'
            }
            to="/employees/create"
          >
            <UserPlus strokeWidth={2.5} className="main-nav__icon" />
            Create Employee
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Header
