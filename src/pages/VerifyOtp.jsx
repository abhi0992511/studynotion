import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import OTPInput from "react-otp-input";
import { RiArrowGoBackLine } from "react-icons/ri";
import { Link, useNavigate } from "react-router-dom";
import { sendOtp, signUp } from "../Services/operations/authAPI";

export const VerifyOtp = () => {
  const { loading } = useSelector((state) => state.auth);
  const { signupData } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { accountType, firstName, lastName, email, password, confirmPassword } =
    signupData;

  const [otp, setOtp] = useState("");
  console.log("ACCOUNT--TYPE-----",accountType);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(
      signUp(
        accountType,
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        otp,
        navigate,
      )
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Verify Email</h1>
          <p className="mb-6 text-center">
            A verification code has been sent to you. Enter the code below.
          </p>
          <form
            onSubmit={handleOnSubmit}
            className="flex flex-col items-center"
          >
            <OTPInput
              value={otp}
              onChange={setOtp}
              numInputs={6}
              renderSeparator={<span className="mx-2">-</span>}
              renderInput={(props) => (
                <input
                  {...props}
                  className="w-16 h-16 text-2xl text-center rounded-lg bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  style={{ color: "white", backgroundColor: "#374151" }} // Ensuring the text color is white and background is dark
                />
              )}
            />
            <button
              type="submit"
              className="mt-6 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition duration-300 text-center"
            >
              Verify Email
            </button>
          </form>
          <div className="flex justify-between items-center mt-4">
            <Link to="/login" className="text-blue-500">
              <p>Back to login</p>
            </Link>
            <button
              onClick={() => dispatch(sendOtp(email, navigate))}
              className="flex items-center gap-x-1 text-blue-500 hover:underline"
            >
              <RiArrowGoBackLine className="ml-1" />
              <p>Resend it</p>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
