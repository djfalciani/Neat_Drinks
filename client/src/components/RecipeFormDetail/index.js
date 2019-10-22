import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Switch from "@material-ui/core/Switch";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import InputAdornment from "@material-ui/core/InputAdornment";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import Favorite from "@material-ui/icons/Favorite";

import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

const useStyles = makeStyles(theme => ({
  container: {
    display: "grid",
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
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important"
  },
  fab: {
    margin: theme.spacing(1)
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  }
}));

export default function RecipeFormDetail() {
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
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-currency"
            select
            label="SelectAlchol"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange("currency")}
            fullWidth
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select an alcohol"
            margin="normal"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-currency"
            select
            label="SelectAlchol"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange("currency")}
            fullWidth
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select an alcohol"
            margin="normal"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-currency"
            select
            label="SelectAlchol"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange("currency")}
            fullWidth
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select an alcohol"
            margin="normal"
          ></TextField>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="standard-select-currency"
            select
            label="SelectAlchol"
            className={classes.textField}
            value={values.currency}
            onChange={handleChange("currency")}
            fullWidth
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select an alcohol"
            margin="normal"
          ></TextField>
        </Grid>
        <Grid item xs={6}>
          <Grid container fullwidth spacing={1} alignItems="justify">
            <Grid item xs={3}>
              <Fab
                size="small"
                color="primary"
                aria-label="add"
                className={classes.fab}
              >
                <AddIcon />
              </Fab>
            </Grid>
            <Grid item fullwidth xs={8}>
              <TextField
                fullwidth
                id="input-with-icon-grid"
                label="Other Ingredients"
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
        
        
          <Grid item xs={12} sm={12}>
          <TextField
        id="drink-instructins"
        label="Drink Instructions"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        multiline
        fullWidth
        rows="4"
        helperText="How do you make this thing?
        "
      />


          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
