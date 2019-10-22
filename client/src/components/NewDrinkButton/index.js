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
      alert("You want to add a drink");
    };
  
    return (
      <div>
        <Button className={classes.button}
        onClick={handleClick}
       fullWidth
        href="/recipe"
        color="primary"
        varient="outline"
        >Add Drink</Button>

      </div>
    );
  }
  