import React from "react";
import { Link } from "react-router-dom";

 const Error = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="flex flex-col items-center justify-center bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-4">Error 404</h1>
        <p className="mb-6 text-center">Page Not Found...</p>
        <Link
          to="/login"
          className="border bg-blue-500 text-white rounded-md px-4 py-2 mt-5 hover:bg-blue-600 transition duration-300"
        >
          Back to Login
        </Link>
      </div>
    </div>
  );
};
export default Error;
