import React from "react";
import { SwipeableDrawer } from "@material-ui/core";
import { useStyles } from "./style";
import SideBar from "./SideBar";

interface NavBarMobileProps {
  isOpen: boolean;
  toggleDrawer: any;
}

function NavBarMobile({ isOpen, toggleDrawer }: NavBarMobileProps) {
  const render = () => <SideBar toggleDrawer={toggleDrawer()}></SideBar>;
  const classes = useStyles();

  return (
    <SwipeableDrawer
      anchor="right"
      open={isOpen}
      onClose={toggleDrawer()}
      onOpen={toggleDrawer()}
      classes={{ paper: classes.paper }}
    >
      {render()}
    </SwipeableDrawer>
  );
}

export default NavBarMobile;
