import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { getResetPassword } from "../Services/operations/authAPI";

export const UpdatePassword = () => {
  const { loading } = useSelector((state) => state.auth);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispatch = useDispatch();
  const location = useLocation();
  const token = location.pathname.split("/").at(-1);
  const navigate = useNavigate();
  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(getResetPassword( password, confirmPassword, token, navigate));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4">Choose New Password</h1>
          <p className="mb-6">
            Almost done. Enter your new password and you are all set.
          </p>
          <form onSubmit={handleOnSubmit}>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block mb-2">
                Enter New Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  color: "white",
                  backgroundColor: "#1F2937",
                  borderColor: "#374151",
                }}
              />
              <span
                onClick={() => setShowPassword((prev) => !prev)}
                className="absolute right-3 top-10 cursor-pointer"
              >
                {!showPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <div className="mb-4 relative">
              <label htmlFor="confirmPassword" className="block mb-2">
                Confirm New Password
              </label>
              <input
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Enter new password"
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                style={{
                  color: "white",
                  backgroundColor: "#1F2937",
                  borderColor: "#374151",
                }}
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className="absolute right-3 top-10 cursor-pointer"
              >
                {!showConfirmPassword ? (
                  <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                )}
              </span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
            >
              Reset Password
            </button>
          </form>
          <Link to="/login" className="text-blue-500 mt-4 inline-block">
            Back to login
          </Link>
        </div>
      )}
    </div>
  );
};
