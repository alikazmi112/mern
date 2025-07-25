import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Profile from "./Components/Profile";
import { AuthProvider } from "./Context/AuthProvider";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <div
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      }}
    >
      <div
        className="container p-4 rounded shadow"
        style={{
          background: "rgba(255, 255, 255, 0.85)",
          maxWidth: "600px",
        }}
      >
        <AuthProvider>
          <Router>
            <Navbar />
            <Routes>
              <Route index path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
        </AuthProvider>
      </div>
    </div>
  );
}

export default App;
