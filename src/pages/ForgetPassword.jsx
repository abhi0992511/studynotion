import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getResetPasswordToken } from "../Services/operations/authAPI";


export const ForgetPassword = () => {
  const [emailSent, setEmailSent] = useState(false);
  const [email, setEmail] = useState("");
  const { loading } = useSelector((state) => state.auth);
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getResetPasswordToken(email,setEmailSent))
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg text-center w-full max-w-md">
        {loading ? (
          <div className="text-white">Loading...</div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-white mb-4">
              {emailSent ? "Check Your Email" : "Reset Your Password"}
            </h1>
            <form onSubmit={handleSubmit}>
              {!emailSent && (
                <div className="mb-4">
                  <label htmlFor="email" className="block text-white mb-2">
                    Email Address:
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email..."
                    className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    style={{ color: "white", backgroundColor: "#1F2937", borderColor: "#374151" }}
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300"
              >
                {emailSent ? "Resend Email" : "Reset Password"}
              </button>
            </form>
            <Link to="/login" className="text-blue-500 mt-4 inline-block">
              Back to login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
