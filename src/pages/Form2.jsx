import React from "react";

const Form2 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-green-100 to-teal-200">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-[400px] backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-green-600 text-center mb-4">Security Details</h2>
        <form className="space-y-5">
          <input type="password" placeholder="Enter Password" className="w-full border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-green-400" />
          <input type="tel" placeholder="Phone Number" className="w-full border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-green-400" />
          <button className="w-full bg-green-600 text-white py-3 rounded-lg shadow-md hover:bg-green-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form2;
