import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { currentUser, logout } = useAuth()
  const navigate = useNavigate()

    const handleLogout = () => {
    const result = logout()
    if (result?.shouldRedirect) {
      navigate('/login')
    }
  }

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-7">
            <Link to="/" className="flex items-center py-4 px-2">
              <span className="font-semibold text-gray-900 text-lg">FlowbitAI</span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/" className="py-4 px-2 text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link to="/dashboard" className="py-4 px-2 text-gray-700 hover:text-blue-600">
              Dashboard
            </Link>
            
            {currentUser ? (
              <button
                onClick={handleLogout}
                className="py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}