import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

handleButtonClick = event => {};

export default function SubmitButton() {
  const classes = useStyles();

  return (
    <div>
      <Button
        variant="contained"
        fullWidth
        color="primary"
        className={classes.button}
      >
        Submit
      </Button>
    </div>
  );
}
