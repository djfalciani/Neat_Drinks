import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

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
    display: "inline"
  }
}));

export default function SubmitButton() {
  const classes = useStyles();

  return (
    <div className={classes.div} fullwidth>
      <Button
        className={classes.root}
        variant="contained"
        // fullWidth
        color="primary"
      >
        Login
      </Button>
    </div>
  );
}
