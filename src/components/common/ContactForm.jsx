import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CountryCode from "../../data/countrycode.json";
import { apiConnector } from "../../Services/apiConnector";
import { contactEndpoint } from "../../Services/apis";
import { useSelector } from "react-redux";

export const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm();
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({
        email: "",
        firstname: "",
        lastname: "",
        phonenumber: "",
        message: "",
        countrycode: "+91",
      });
    }
  }, [isSubmitSuccessful, reset]);

  const ContactUsDetails = async (data) => {
    try {
      setLoading(true);
      const { firstname, lastname, email, countrycode, phonenumber, message } =
        data;
      console.log("firstname", firstname);
      const response = await apiConnector(
        "POST",
        contactEndpoint.CREATE_CONTACT,
        {
          firstname,
          lastname,
          email,
          countrycode,
          phonenumber,
          message,
        }
      );
      if (!response.data.success) {
        throw new Error(response.data.message);
      }
      console.log("RESPONSE", response);
      console.log("DATA", data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10">
      <form
        onSubmit={handleSubmit(ContactUsDetails)}
        className="space-y-4 bg- text-black rounded-lg shadow-md px-8 py-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label htmlFor="firstname" className="text-white text-lg mb-1">
              First Name <sup className="text-pink-200">*</sup>
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter first name"
              {...register("firstname", { required: true })}
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-lg px-3 py-2"
            />
            {errors.firstname && (
              <span className="text-sm text-white gap-y-1">
                Please enter first name
              </span>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="lastname" className="text-white text-lg mb-1">
              Last Name <sup className="text-pink-200">*</sup>
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter last name"
              {...register("lastname", { required: true })}
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-lg px-3 py-2"
            />
            {errors.lastname && (
              <span className="text-sm text-white gap-y-1">
                Please enter last name
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-white text-lg mb-1">
            Email <sup className="text-pink-200">*</sup>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter email address"
            {...register("email", { required: true })}
            className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-lg px-3 py-2"
          />
          {errors.email && (
            <span className="text-sm text-white gap-y-1">
              Please enter email
            </span>
          )}
        </div>
        <div className="flex gap-x-4">
          <div className="flex flex-col w-1/3">
            <label htmlFor="countrycode" className="text-white text-lg mb-1">
              Country Code <sup className="text-pink-200">*</sup>
            </label>
            <select
              name="countrycode"
              id="countrycode"
              defaultValue="+91"
              {...register("countrycode", { required: true })}
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-lg px-3 py-2"
            >
              {CountryCode.map((country, index) => (
                <option key={index} value={country.code}>
                  {country.code} - {country.country}
                </option>
              ))}
            </select>
            {errors.countrycode && (
              <span className="text-sm text-white gap-y-1">
                Please select a country code
              </span>
            )}
          </div>
          <div className="flex flex-col w-2/3">
            <label htmlFor="phonenumber" className="text-white text-lg mb-1">
              Phone Number <sup className="text-pink-500">*</sup>
            </label>
            <input
              type="tel"
              id="phonenumber"
              name="phonenumber"
              placeholder="Enter phone number"
              {...register("phonenumber", {
                required: {
                  value: true,
                  message: "Please enter phone number",
                },
                maxLength: { value: 10, message: "Invalid phone number" },
                minLength: { value: 8, message: "Invalid phone number" },
              })}
              className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-lg px-3 py-2"
            />
            {errors.phonenumber && (
              <span className="text-sm text-white gap-y-1">
                {errors.phonenumber.message}
              </span>
            )}
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="text-white text-lg mb-1">
            Message <sup className="text-pink-200">*</sup>
          </label>
          <textarea
            id="message"
            name="message"
            rows={6}
            placeholder="Enter your message"
            {...register("message", { required: true })}
            className="border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 text-lg px-3 py-2"
          ></textarea>
          {errors.message && (
            <span className="text-sm text-white gap-y-1">
              Please enter a message
            </span>
          )}
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="py-3 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            {loading ? "Submitting..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};
