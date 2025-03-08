import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white shadow-lg rounded-xl p-10 w-96 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome</h1>
        <p className="text-gray-500 mb-6">Choose a form to fill</p>
        <div className="flex flex-col gap-4">
          <Link to="/form1" className="w-full bg-blue-500 text-white py-3 rounded-lg shadow-md hover:bg-blue-600 transition">Form 1</Link>
          <Link to="/form2" className="w-full bg-green-500 text-white py-3 rounded-lg shadow-md hover:bg-green-600 transition">Form 2</Link>
          <Link to="/form3" className="w-full bg-red-500 text-white py-3 rounded-lg shadow-md hover:bg-red-600 transition">Form 3</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
