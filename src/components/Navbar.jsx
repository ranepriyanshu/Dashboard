import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <nav className="bg-white/30 backdrop-blur-md fixed w-full top-0 shadow-md z-10">
      <div className="container mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>
        <div className="space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-500 transition">Home</Link>
          <Link to="/form1" className="text-gray-700 hover:text-blue-500 transition">Form 1</Link>
          <Link to="/form2" className="text-gray-700 hover:text-blue-500 transition">Form 2</Link>
          <Link to="/form3" className="text-gray-700 hover:text-blue-500 transition">Form 3</Link>
        </div>
        <div>
          {isAuthenticated ? (
            <div className="flex items-center gap-4">
              <p className="text-gray-700">{user?.name}</p>
              <button 
                onClick={() => logout({ returnTo: window.location.origin })} 
                className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <button 
              onClick={() => loginWithRedirect()} 
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 transition"
            >
              Login
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
