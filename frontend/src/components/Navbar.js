import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>MargShala Foundation</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {(
            <div>
                <a href="https://margshala.com/en/blog/" target="_blank" rel="noopener noreferrer">Blogs</a>
                <a href="https://margshala.com/en/local-livelihoods/" target="_blank" rel="noopener noreferrer">Local Livelihoods</a>
              <a href="https://margshala.com/en/about-margshala/" target="_blank" rel="noopener noreferrer">About Us</a>
              <a href="https://margshala.com/en/blog/" target="_blank" rel="noopener noreferrer">Blogs</a>
              <Link to="/login">Login</Link>
              <Link to="/signup">Signup</Link>
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar