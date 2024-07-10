import React from "react";
import * as Icons from "react-icons/vsc";
import { NavLink, matchPath, useLocation } from "react-router-dom";

const SidebarLinks = ({ link, iconName }) => {
  const Icon = Icons[iconName];
  const location = useLocation();

  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
   console.log("LINK---->",link)
  return (
    <div>
      <NavLink to={link?.path}>
        <div
          className={`${
            matchRoute(link?.path) ? "text-yellow-50" : "text-white"
          } flex gap-x-2`}>
          <Icon />
          <p>{link?.name}</p>
        </div>
      </NavLink>
    </div>
  );
};
export default SidebarLinks;
