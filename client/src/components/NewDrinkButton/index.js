import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../../utils/GlobalState";

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

  const handleSubmit = e => {
    e.preventDefault();
  };
  return (
    <Link to="/recipe">
      <Button
        className={classes.button}
        fullWidth
        // href="/recipe"
        color="secondary"
        variant="outlined"
        // onClick={handleSubmit}
      >
        Add Drink
      </Button>
    </Link>
  );
}
