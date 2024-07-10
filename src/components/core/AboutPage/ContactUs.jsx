import React from "react";
import { ContactForm } from "../../common/ContactForm";

export const ContactUs = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-richblack-800 p-8 rounded-lg shadow-md max-w-2xl w-full">
        <h1 className="text-3xl font-bold text-gray-800 mb-4 text-center">
          Get in Touch
        </h1>
        <p className="text-lg text-gray-600 mb-8 text-center">
          We'd love to hear from you. Please fill out this form.
        </p>
        <ContactForm />
      </div>
    </div>
  );
};
