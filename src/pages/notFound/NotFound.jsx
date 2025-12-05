import { Link } from 'react-router-dom'
import Header from '../../components/header/Header'
import { Ban } from 'lucide-react'

const NotFound = () => {
  return (
    <>
      <Header />
      <div className="error">
        <Ban size={50} className="error__icon" />

        <span>
          The page you are trying to access does not exist or the URL is
          incorrect.
        </span>

        <Link to="/" className="form__button error__button">
          Return to Home
        </Link>
      </div>
    </>
  )
}

export default NotFound
