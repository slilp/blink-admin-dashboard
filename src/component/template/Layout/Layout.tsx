import React from "react";
import { Container, Hidden, Grid } from "@material-ui/core";
import { NavBar, SideBar } from "../../organism";
import { useStyles } from "./style";

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <NavBar></NavBar>
      <Container maxWidth="lg">
        <Grid container spacing={1}>
          <Grid item md={3} className={classes.menu}>
            <Hidden smDown>
              <SideBar></SideBar>
            </Hidden>
          </Grid>
          <Grid item md={9} className={classes.topic}>
            {children}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Layout;
