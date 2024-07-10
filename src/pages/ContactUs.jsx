import React from "react";
import { IoMdChatboxes } from "react-icons/io";
import { FaEarthAsia } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { ContactForm } from "../components/common/ContactForm";
import Footer from "../components/common/Footer";

export const ContactUs = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-11/12 max-w-maxContent mx-auto mt-[100px]">
        <div className="flex flex-col md:flex-row gap-10 justify-between items-start text-white">
          <div className="flex flex-col bg-richblack-800 rounded-md p-11 w-full md:w-1/2 gap-5">
            <div className="flex flex-col border-b border-richblack-500 pb-4">
              <div className="flex gap-x-2 items-center">
                <IoMdChatboxes />
                <h1 className="text-lg font-semibold">Chat with us</h1>
              </div>
              <p>Our friendly team is here to help.</p>
              <p>info@studynotion.com</p>
            </div>
            <div className="flex flex-col border-b border-richblack-500 pb-4">
              <div className="flex gap-x-2 items-center">
                <FaEarthAsia />
                <h1 className="text-lg font-semibold">Visit us</h1>
              </div>
              <p>Come and say hello to our office HQ.</p>
              <p>Akshay Nagar 1st Block 1st Cross, Ramurthy Nagar</p>
              <p>Bangalore-5600018</p>
            </div>
            <div className="flex flex-col">
              <div className="flex gap-x-2 items-center">
                <IoCall />
                <h1 className="text-lg font-semibold">Call us</h1>
              </div>
              <p>Mon-Fri 8am-5pm.</p>
              <p>+123 456 789</p>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-richblack-800 rounded-md mb-10 p-10 w-full md:w-1/2 gap-1">
            <div className="flex flex-col items-start gap-y-2">
              <h1 className="text-4xl font-bold">Got Ideas? We've got the skills. Let's team up!</h1>
              <p className="text-xl">Tell us more about yourself and what you have in mind.</p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
      <div className="w-full bg-richblack-900">
        <Footer />
      </div>
    </div>
  );
};
