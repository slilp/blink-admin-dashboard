import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Container,
  Hidden,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { useStyles } from "./style";
import NavBarMobile from "../NavBarMobile";
import { Logo } from "../../../public/icon";

function NavBar() {
  const classes = useStyles();

  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer =
    () => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }
      setOpen(!open);
    };

  return (
    <AppBar position="static" elevation={1} color="inherit">
      <Container maxWidth="lg">
        <Hidden mdUp>
          <Toolbar>
            <img className={classes.logo} src={Logo} alt=""></img>
            <div className={classes.grow} />
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon onClick={toggleDrawer()} />
            </IconButton>
          </Toolbar>
        </Hidden>
        <NavBarMobile isOpen={open} toggleDrawer={toggleDrawer}></NavBarMobile>
      </Container>
    </AppBar>
  );
}

export default NavBar;
