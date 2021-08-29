import React from "react";
import { useLocation } from "react-router-dom";
import { ButtonMenu, LinkNoStyle } from "../../atomic";

interface SingleLevelMenuProps {
  permission: string;
  title: string;
  icon: JSX.Element;
  path: string;
  checkPermission: string[];
  toggleDrawer?: any;
}

function SingleLevelMenu({
  permission,
  title,
  icon,
  path,
  checkPermission = [],
  toggleDrawer,
}: SingleLevelMenuProps) {
  let location = useLocation();

  const closeToggle = () => {
    if (toggleDrawer) toggleDrawer();
  };

  return (
    <div>
      {checkPermission.includes(permission) ? (
        <LinkNoStyle to={path} onClick={closeToggle}>
          <ButtonMenu isActive={location.pathname === path ? true : false}>
            <span> {icon} </span>
            <span> {title} </span>
          </ButtonMenu>
        </LinkNoStyle>
      ) : null}
    </div>
  );
}

export default SingleLevelMenu;
