import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const loggedIn = localStorage.getItem("loggedIn") === "true";

  return (
    <Routes>
      <Route
        path="/login"
        element={loggedIn ? <Navigate to="/home" /> : <Login />}
      />

      <Route
        path="/home"
        element={loggedIn ? <Home /> : <Navigate to="/login" />}
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
