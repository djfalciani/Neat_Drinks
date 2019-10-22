import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: 'none',
  },
}));
  
  export default function NewAccountButton() {
    const classes = useStyles();
  
    const handleClick = () => {
      alert("You want to create an account");
    };
  
    return (
      <div>
        <Button className={classes.button}
        onClick={handleClick}
        fullWidth="true"
        href="/search"
        color="primary"
        >create an account</Button>
      </div>
    );
  }
  