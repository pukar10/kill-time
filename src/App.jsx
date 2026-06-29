import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    () => localStorage.getItem("loggedIn") === "true",
  );

  const handleLogin = () => {
    localStorage.setItem("loggedIn", "true");
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedIn");
    setLoggedIn(false);
  };

  return (
    <Routes>
      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/home" /> : <Login onLogin={handleLogin} />}
      />

      <Route
        path="/home"
        element={
          loggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/login" />
        }
      />

      <Route
        path="/dashboard"
        element={<Navigate to={loggedIn ? "/home" : "/login"} />}
      />

      <Route
        path="*"
        element={<Navigate to={loggedIn ? "/home" : "/login"} />}
      />
    </Routes>
  );
}

export default App;
