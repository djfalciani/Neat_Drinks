import React from "react";
import { Link } from "react-router-dom";
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

export default function NewDrinkButton() {
  const classes = useStyles();
  // eslint-disable-next-line
  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Link to="/recipe">
      <Button
        className={classes.button}
        fullWidth
        color="primary"
        // onClick={handleSubmit}
      >
        Add Drink
      </Button>
    </Link>
  );
}
