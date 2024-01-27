import React from "react";
import { useContext } from "react";
import {
  BrowserRouter,
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Register from "./pages/Register";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "../src/style.scss";
import { AuthContext } from "./context/AuthContext";
function App() {
  const { currentUser } = useContext(AuthContext)||({});
  console.log(currentUser);
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
