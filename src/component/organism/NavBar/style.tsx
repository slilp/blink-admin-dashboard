import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    logo: {
      width: "50px",
      height: "50px",
    },
    textSpacing: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    toolbarDesktop: {
      display: "none",
      backgroundColor: "#FFFFFF",
      padding: "0px",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    toolbarMobile: {
      display: "flex",
      padding: "0px",
      backgroundColor: "#FFFFFF",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
  })
);
