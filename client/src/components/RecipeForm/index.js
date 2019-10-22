import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

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
  const [values, setValues] = React.useState({
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  return (
    <form className={classes.container} noValidate autoComplete="on">
      <TextField
        required
        id="filled-required"
        label="drinkName"
        defaultValue="Drink Name"
        className={classes.textField}
        margin="normal"
        fullWidth
        variant="filled"
      />

      <TextField
        id="standard-uncontrolled"
        // label="drinkBaseOn"
        defaultValue="classic drink"
        className={classes.textField}
        margin="normal"
        fullWidth
        helperText="If your drink is a take on a classic cocktail, enter here."
        variant="outlined"
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
        helperText="Place your Drink Recipe here"
      />
    </form>
  );
}
