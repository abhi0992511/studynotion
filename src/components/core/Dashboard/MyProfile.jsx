import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Cbtn } from "../../common/Cbtn";
import { VscEdit } from "react-icons/vsc";

export const MyProfile = () => {
  const { user } = useSelector((state) => state.profile);
  const navigate = useNavigate();

  const handleEditClick = () => {
    navigate("/dashboard/settings");
  };

  return (
    <div className="w-full">
      <div className="flex flex-col text-white p-4">
        <h1 className="text-3xl mb-4">My Profile</h1>
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
          <div className="flex flex-col items-center md:items-start text-white p-4">
            <img
              src={user?.image}
              alt="profile-pic"
              className="w-24 h-24 rounded-md mb-4"
            />
            <div className="text-center md:text-left">
              <p className="text-xl font-semibold">{user?.name}</p>
              <p className="text-lg">{user?.email}</p>
            </div>
          </div>
          <div className="w-full gap-x-1 md:w-auto flex justify-center md:justify-start bg-yellow-50 items-center font-semibold p-1 rounded-md">
            <Cbtn onclick={handleEditClick} text="Edit" />
            <VscEdit color="black" />
          </div>
        </div>
        <h1 className="text-3xl mb-4">About</h1>
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
          <div className="flex flex-col items-center md:items-start text-white p-4">
            {user?.additionalDetails?.about
              ? user?.additionalDetails?.about
              : "Add about your self."}
          </div>
          <div className="w-full gap-x-1 md:w-auto flex justify-center md:justify-start bg-yellow-50 items-center font-semibold p-1 rounded-md">
            <Cbtn onclick={handleEditClick} text="Edit" />
            <VscEdit color="black" />
          </div>
        </div>
        <h1 className="text-3xl mb-4">Personal Details</h1>
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10">
          <div className="flex flex-col items-center md:items-start text-white p-4">
            <div>
              <h1>First Name</h1>
              {user?.firstName}
            </div>
            <div>
              <h1>Last Name</h1>
              {user?.lastName}
            </div>
            <div>
              <h1> Email</h1>
              {user?.email}
            </div>
            <div>
              <h1>Date of Birth</h1>
              {user?.additionalDetails.dateOfBirth
                ? user?.additionalDetails.dateOfBirth
                : "MM/DD/YYYY"}
            </div>
            <div>
              <h1>Phone Number</h1>
              {user?.additionalDetails.contactNumber
                ? user?.additionalDetails.contactNumber
                : "123456789"}
            </div>
            <div>
              <h1>Gender</h1>
              {user?.additionalDetails.gender
                ? user?.additionalDetails.gender
                : "Male"}
            </div>
          </div>
          <div className="w-full gap-x-1 md:w-auto flex justify-center md:justify-start bg-yellow-50 items-center font-semibold p-1 rounded-md">
            <Cbtn onclick={handleEditClick} text="Edit" />
            <VscEdit color="black" />
          </div>
        </div>
      </div>
    </div>
  );
};
