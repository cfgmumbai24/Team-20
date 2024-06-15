<<<<<<< HEAD
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Mentor from "./pages/Mentor";

function App() {
  const { user } = useAuthContext();
=======
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './hooks/useAuthContext'
import { useAuthSContext } from './hooks/useAuthSContext'

// pages & components
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import SignUpS from './pages/SignUpS'
import Navbar from './components/Navbar'
import Mentor from './pages/Mentor'
import Admin from "./pages/Admin"
import AdminFund from "./pages/AdminFund"

function App() {
  const { user } = useAuthContext()
  const { swarozgaruser } = useAuthSContext()

console.log(swarozgaruser)
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={user ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/signup"
              element={!user ? <Signup /> : <Navigate to="/" />}
            />
            <Route
              path="/mentor"
              element={!user ? <Mentor /> : <Navigate to="/mentor" />}
            />
            <Route 
              path="/mentor" 
              element={!user ? <Mentor /> : <Navigate to="/mentor" />} 
            />
            <Route 
              path="/admin" 
              element={!user ? <Admin /> : <Navigate to="/admin" />} 
            />
            <Route 
              path="/adminfund" 
              element={!user ? <AdminFund /> : <Navigate to="/adminfund" />} 
            />

<Route 
              path="/signups" 
              element={ !swarozgaruser ? <SignUpS /> : <Navigate to="/" />} 
            />

          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
