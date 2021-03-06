import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useUserContext } from "../../utils/GlobalState";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 0
  }
}));

export default function RecipeForm() {
  const classes = useStyles();
  // eslint-disable-next-line
  const [stateUser, dispatch] = useUserContext();

  const [drinkName, setDrinkName] = useState({ drinkName: "" });
  const [drinkInstructions, setDrinkInstructions] = useState({
    drinkInstructions: "enter description"
  });

  const handleNameChange = event => {
    console.log(event.target.value);
    const { value } = event.target;
    setDrinkName({
      ...drinkName,
      drinkName: value
    });
  };
  const handleDescriptionChange = event => {
    // console.log(event.target.value);
    const { value } = event.target;
    setDrinkInstructions({
      ...drinkInstructions,
      drinkInstructions: value
    });
  };

  const handleFormSubmit = async function(e) {
    e.preventDefault();
    const theName = drinkName.drinkName;
    let loadingUser = stateUser.id;

    if (stateUser.id === 0) {
      loadingUser = 3;
    } else {
      loadingUser = stateUser.id;
    }

    const recipe = {
      UserId: loadingUser,
      dislpay_name: theName,
      instruction: drinkInstructions.drinkInstructions
    };
    // eslint-disable-next-line
    const response = await fetch("api/createdrink", {
      method: "POST",
      body: JSON.stringify(recipe),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {});
  };

  useEffect(() => {}, []);

  return (
    <form className="commentForm" onSubmit={handleFormSubmit}>
      <TextField
        required
        name="drinkName"
        value={drinkName.drinkName}
        onChange={handleNameChange}
        id="drink-name"
        label="Drink Name"
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="filled"
      />

      <TextField
        id="drink-description"
        label="Drink Description"
        name="drinkDescription"
        onChange={handleDescriptionChange}
        className={classes.textField}
        margin="normal"
        variant="outlined"
        multiline
        fullWidth
        rows="4"
        // helperText="Place your Drink Recipe here"
      />

      <Button
        className={classes.button}
        fullWidth
        variant="outlined"
        type="submit"
        value="Create"
        color="primary"
      >
        Create
      </Button>
    </form>
  );
}
