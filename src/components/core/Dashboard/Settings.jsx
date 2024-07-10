import React from "react";
import UpdateProfilePic from "../Dashboard/Settings/UpdateProfilePic";
import UpdatePersonalDetails from "./Settings/UpdatePersonalDetails";

export const Settings = () => {
  return (
    <div className="flex flex-col gap-4">
      <UpdateProfilePic />
      <UpdatePersonalDetails/>
    </div>
  );
};
