import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import axios from "axios"

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function RecipeForm() {
  const classes = useStyles();
  const [drinkName, setDrinkName] = useState({});
  const [drinkInstructions, setDrinkInstructions] = useState({});

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });

  const handleFormSubmit = event => {
    event.preventDefault();
    // console.log(event.target.drinkName);
    const thisVariable = { drinkName };
    setDrinkName(drinkName)
    alert(thisVariable);
    // const newRecipe = {
    //    name:
    //    description:
    // }

    // axios.post("/api/drink", newRecipe)
    // .then()
  };

  return (
    <form className={classes.container} noValidate autoComplete="on">
      <TextField
        required
        value={drinkName}
        onChange={e => setDrinkName(e.target.value)}
        id="drink-name"
        label="Drink Name"
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="filled"
        name="drinkName"
      />
      <TextField
        id="drink-description"
        label="Drink Description"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        multiline
        fullWidth
        rows="4"
        // helperText="Place your Drink Recipe here"
      />
      <Button
        onClick={handleFormSubmit}
        name="drink-recipe-button"
        variant="contained"
        fullWidth
        color="primary"
        type="submit"
        className={classes.button}
      >
        Submit
      </Button>
    </form>
  );
}
