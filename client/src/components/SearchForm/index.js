import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import SearchField from "../SearchField";
import DrinkCardList from "../DrinkCardList";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  },
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
    <Paper>
      <Paper>
        {" "}
        <form className={classes.container} noValidate autoComplete="on">
          <TextField
            required
            id="filled-required"
            label="SearchTerm"
            defaultValue="Drink Search"
            className={classes.textField}
            margin="normal"
            fullWidth
            variant="filled"
          />
          <SearchField />
          <Divider />
        </form>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h1" color="secondary">
          Results are below
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <DrinkCardList />
      </Paper>
    </Paper>
  );
}
