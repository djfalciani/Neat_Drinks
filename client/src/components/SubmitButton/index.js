import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { width } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: "97%"
  },
  div:{
    margin: "auto",
  },
  input: {
    display: "none"
  }
}));

export default function SubmitButton() {
  const classes = useStyles();

  return (
    <div className={classes.div} fullwidth>
      <Button
        className={classes.root}
        variant="contained"
        fullWidth
        color="primary"
        // className={classes.button}
      >
        Login
      </Button>
    </div>
  );
}
