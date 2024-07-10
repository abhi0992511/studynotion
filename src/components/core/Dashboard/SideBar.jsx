import React, { useState } from "react";
import { dashboardSideLinks } from "../../../data/dashboard-links";
import { useDispatch, useSelector } from "react-redux";
import SidebarLinks from "../../../components/core/Dashboard/Sidebarlinks";
import { logout } from "../../../Services/operations/authAPI";
import { useNavigate } from "react-router-dom";
import { VscSignOut } from "react-icons/vsc";
import { ConfirmationBox } from "../../common/ConfirmationBox";

export const SideBar = () => {
  const { user, loading: profileLoading } = useSelector(
    (state) => state.profile
  );
  const { loading: authLoading } = useSelector((state) => state.auth);

  const [confirmationModal, setConfirmationModal] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout(navigate));
  };

  const handleCancel = () => {
    setConfirmationModal(null);
  };

  if (profileLoading || authLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col h-full w-1/5 bg-gray-800 text-white p-4">
      <div className="flex">
        {dashboardSideLinks.map((link) => {
          if (link && link.type !== user.accountType) return null;
          return (
            <SidebarLinks key={link.id} link={link} iconName={link?.icon} />
          );
        })}
      </div>
      <div className="flex flex-col">
        <SidebarLinks
          link={{
            name: "Settings",
            path: "dashboard/settings",
          }}
          iconName="VscSettingsGear"
        />
        <button
          className="flex items-center gap-2 mt-4 text-lg"
          onClick={() =>
            setConfirmationModal({
              text1: "Are You Sure?",
              text2: "You will be logged out of your account.",
              btn1Text: "Logout",
              btn2Text: "Cancel",
              btn1Handler: handleLogout,
              btn2Handler: handleCancel,
            })
          }
        >
          <VscSignOut fontSize={25} />
          <p>Logout</p>
        </button>
      </div>
      {confirmationModal && <ConfirmationBox modalData={confirmationModal} />}
    </div>
  );
};
