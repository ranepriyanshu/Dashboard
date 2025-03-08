import React from "react";

const Form3 = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-100 to-pink-200">
      <div className="bg-white shadow-2xl rounded-lg p-8 w-[400px] backdrop-blur-md">
        <h2 className="text-2xl font-semibold text-red-600 text-center mb-4">Address Details</h2>
        <form className="space-y-5">
          <input type="text" placeholder="Your Address" className="w-full border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-red-400" />
          <input type="date" className="w-full border p-3 rounded-md shadow-sm focus:ring-2 focus:ring-red-400" />
          <button className="w-full bg-red-600 text-white py-3 rounded-lg shadow-md hover:bg-red-700 transition">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form3;
