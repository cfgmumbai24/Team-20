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
import StorySummary from "./components/StorySummary/StorySummary";
import Swarozgar from "./components/Swarrozgar/Swarrozgar";

function App() {
  const { user } = useAuthContext();
  const { swarozgaruser } = useAuthSContext();

  // console.log(swarozgaruser)

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
            <Route path="/user/generic_stories" element={<StoryList />} />
            <Route path="/user/story/:id" element={<StoryDetails />} />
            <Route
              path="/mentor"
              element={!user ? <Mentor /> : <Navigate to="/mentor" />}
            />
            <Route
              path="/signups"
              element={!swarozgaruser ? <SignUpS /> : <Navigate to="/" />}
            />
            <Route path="/test" element={<Spinner />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/test" element={<Spinner />} />            
             <Route
              path="/test"
              element={<Swarozgar />}
            />
        
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
