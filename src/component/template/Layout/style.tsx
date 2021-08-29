import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: "#eeeeeec3",
    },
    content: {},
    menu: {
      marginTop: "1.5rem",
    },
    topic: {
      marginTop: "1.5rem",
    },
  })
);
