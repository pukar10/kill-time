import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

function App() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/dashboard" /> : <Login />}
      />

      <Route
        path="/dashboard"
        element={loggedIn ? <Dashboard /> : <Navigate to="/login" />}
      />

      <Route
        path="*"
        element={<Navigate to={loggedIn ? "/dashboard" : "/login"} />}
      />
    </Routes>
  );
}

export default App;