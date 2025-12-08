/**
 * ScrollToTop component.
 *
 * Automatically scrolls the window to the top whenever the URL path changes.
 *
 * This component does not render anything and should be placed inside the Router,
 * typically at the root of the application (App.jsx).
 *
 * @returns {null} This component renders nothing.
 */
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}
