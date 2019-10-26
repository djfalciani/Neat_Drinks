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
  
  export default function NewDrinkButton() {
    const classes = useStyles();
  
    return (
      <div>
        <Button className={classes.button}
        fullWidth
        href="/recipe"
        color="primary"
        variant="outline"
        >Add Drink</Button>

      </div>
    );
  }
  