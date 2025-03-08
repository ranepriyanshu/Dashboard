import React from "react";

const Form1 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 to-indigo-200">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-[400px] backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">Personal Information</h2>
        <form className="space-y-5">
          <input type="text" placeholder="Your Name" className="w-full border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400" />
          <input type="email" placeholder="Your Email" className="w-full border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-blue-400" />
          <button className="w-full bg-blue-600 text-white py-3 rounded-lg shadow-md hover:bg-blue-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form1;
