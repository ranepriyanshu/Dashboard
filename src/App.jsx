import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";

const PrivateRoute = ({ children }) => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  if (!isAuthenticated) {
    loginWithRedirect();
    return null;
  }
  return children;
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form1" element={<PrivateRoute><Form1 /></PrivateRoute>} />
        <Route path="/form2" element={<PrivateRoute><Form2 /></PrivateRoute>} />
        <Route path="/form3" element={<PrivateRoute><Form3 /></PrivateRoute>} />
      </Routes>
    </Router>
  );
};

export default App;
