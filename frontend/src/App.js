import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useAuthContext } from "./hooks/useAuthContext";

// pages & components
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import Mentor from "./pages/Mentor";
import Admin from "./pages/Admin"
import AdminFund from "./pages/AdminFund"
import Welcome from "./components/Welcome/Welcome";
import Swarozgar from "./components/Swarrozgar/Swarrozgar";
import SignUpS from "./pages/SignUpS"
import { useAuthSContext } from "./hooks/useAuthSContext";
import StoryList from "./components/StoryList/StoryList"
import StoryDetails from "./components/StoryDetails/StoryDetails"
import CourseWindow from "./components/CourseWindow/CourseWindow";

function App() {
  const { user } = useAuthContext();
  const { swarozgaruser } = useAuthSContext();

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
            <Route path="/user/generic_stories" element={<StoryList  />} />
            <Route path="/user/story/:id" element={<StoryDetails />} />
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
              element={ !swarozgaruser ? <SignUpS /> : <Navigate to="/" /> }/> 
            <Route
              path="/signups"
              element={!swarozgaruser ? <SignUpS /> : <Navigate to="/" />}
            />            
            <Route path="/welcome" element={<Welcome />} />
             <Route
              path="/test"
              element={<Swarozgar />}
            />
            <Route 
              path="/courses" 
              element={ <CourseWindow/>} 
            />
        
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
