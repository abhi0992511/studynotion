import React from "react";

export const Cbtn = ({
  text,
  children,
  disabled,
  outline = false,
  onclick,
  type,
}) => {
  return (
    <div className="bg-yellow-50 text-richblack-800 rounded-md p-2 text-xl shadow-md text-center hover:transition-all duration-200">
      <button onClick={onclick} type={type}>
        {children ? (
          <>
            {text}
            {children}
          </>
        ) : (
          <span>{text}</span>
        )}
      </button>
    </div>
  );
};
