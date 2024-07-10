import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/common/Navbar";
import OpenRoute from "./components/core/Auth/OpenRoute";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { ForgetPassword } from "./pages/ForgetPassword";
import { UpdatePassword } from "./pages/UpdatePassword";
import { VerifyOtp } from "./pages/VerifyOtp";
import { About } from "./pages/About";
import { ContactUs } from "./pages/ContactUs";
import { MyProfile } from "./components/core/Dashboard/MyProfile";
import Error from "./pages/Error";
import { Dashboard } from "./pages/Dashboard";
import { ProtectedRoute } from "./components/core/Auth/ProtectedRoute";
import { Settings } from "./components/core/Dashboard/Settings";
import { EnrolledCourses } from "./components/core/Dashboard/EnrolledCourses";
import { Cart } from "./components/core/Dashboard/Cart";

function App() {
  return (
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
        <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
        <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgetPassword />
            </OpenRoute>
          }
        />
        <Route
          path="update-password/
"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
        <Route
          path="/verify-email"
          element={
            <OpenRoute>
              <VerifyOtp />
            </OpenRoute>
          }
        />
        {/* <Route
          path="/dashboard/my-profile"
          element={
            <OpenRoute>
              <ProfileDropdown />
            </OpenRoute>
          }
        /> */}
        <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <OpenRoute>
              <ContactUs />
            </OpenRoute>
          }
        />
        <Route
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard/my-profile" element={<MyProfile />}></Route>
          <Route path="dashboard/settings" element={<Settings />}></Route>
          <Route
            path="dashboard/enrolled-courses"
            element={<EnrolledCourses />}
          ></Route>
          <Route
            path="dashboard/cart"
            element={<Cart />}
          ></Route>
        </Route>

        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
