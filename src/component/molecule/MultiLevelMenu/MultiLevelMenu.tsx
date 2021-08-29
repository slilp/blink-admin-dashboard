import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { Collapse, List, Box } from "@material-ui/core";
import { ButtonMenu, LinkNoStyle } from "../../atomic";
import { GoChevronUp, GoChevronDown } from "react-icons/go";

interface MultiLevelMenuProps {
  permission: string;
  title: string;
  icon: JSX.Element;
  items: SubMultiLevelMenuProps[];
  checkPermission: string[];
  toggleDrawer?: any;
}

interface SubMultiLevelMenuProps {
  permission: string;
  title: string;
  icon: JSX.Element;
  path: string;
}

function MultiLevelMenu({
  permission,
  title,
  icon,
  items = [],
  checkPermission = [],
  toggleDrawer,
}: MultiLevelMenuProps) {
  let location = useLocation();

  const [open, setOpen] = useState<boolean>(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  const closeToggle = () => {
    if (toggleDrawer) toggleDrawer();
  };

  return (
    <>
      {checkPermission.includes(permission) ? (
        <>
          <ButtonMenu isActive={false} onClick={handleClick}>
            <span>{icon}</span>
            <span> {title} </span>
            <span>{open ? <GoChevronUp /> : <GoChevronDown />}</span>
          </ButtonMenu>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <Box
                component="div"
                borderBottom={1}
                mb={2}
                borderColor="grey.400"
              >
                {items.map((item: SubMultiLevelMenuProps) => {
                  if (checkPermission.includes(item.permission)) {
                    return (
                      <LinkNoStyle to={item.path} onClick={closeToggle}>
                        <ButtonMenu
                          isActive={
                            location.pathname === item.path ? true : false
                          }
                        >
                          <span> {item.icon} </span>
                          <span> {item.title} </span>
                        </ButtonMenu>
                      </LinkNoStyle>
                    );
                  } else {
                    return null;
                  }
                })}
              </Box>
            </List>
          </Collapse>
        </>
      ) : null}
    </>
  );
}

export default MultiLevelMenu;
