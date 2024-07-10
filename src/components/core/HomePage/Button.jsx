import React from "react";
import { Link } from "react-router-dom";

const Button = ({ children, linkto, active }) => {
  const activeClass = "bg-yellow-50 text-richblack-800";
  const inactiveClass = "bg-richblack-900";

  return (
    <Link to={linkto}>
      <div
        className={`text-center px-6 py-3 font-bold text-lg rounded-md hover:scale-95 transition-all duration-200 ${
          active ? activeClass : inactiveClass
        }`}
      >
        {children}
      </div>
    </Link>
  );
};

export default Button;
