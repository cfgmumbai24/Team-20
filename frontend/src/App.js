<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";
import { useAuthSContext } from "./hooks/useAuthSContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import SignUpS from "./pages/SignUpS";
import Navbar from "./components/Navbar";
import Mentor from "./pages/Mentor";
import StoryList from "./components/StoryList/StoryList";
import StoryDetails from "./components/StoryDetails/StoryDetails";
import Spinner from "./components/Spinner/Spinner";
import Welcome from "./components/Welcome/Welcome";
>>>>>>> origin/aneesh

function App() {
  const { user } = useAuthContext();
  const { swarozgaruser } = useAuthSContext();

<<<<<<< HEAD
console.log(swarozgaruser)
>>>>>>> 99a41ab2ecd59b9254ffa687031676557d7efad1
=======
  // console.log(swarozgaruser)
>>>>>>> origin/aneesh

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
<<<<<<< HEAD
            />
            <Route
              path="/mentor"
              element={!user ? <Mentor /> : <Navigate to="/mentor" />}
=======
>>>>>>> origin/aneesh
            />
            <Route path="/user/generic_stories" element={<StoryList />} />
            <Route path="/user/story/:id" element={<StoryDetails />} />
            <Route
              path="/mentor"
              element={!user ? <Mentor /> : <Navigate to="/mentor" />}
            />
<<<<<<< HEAD
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
=======
            <Route
              path="/signups"
              element={!swarozgaruser ? <SignUpS /> : <Navigate to="/" />}
>>>>>>> origin/aneesh
            />
            <Route path="/test" element={<Spinner />} />
            <Route path="/welcome" element={<Welcome />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
