import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  
  container: {
    display: "flex",
    flexWrap: "wrap",
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
  }, notchedOutline: {
    borderWidth: '1px',
    borderColor: 'green !important'
  },
}));

export default function LoginForm() {
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
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        id="outlined-email-input"
        borderColor="red"
        label="Email"
        className={classes.textField}
        borderRadius={16}
        type="email"
        name="email"
        fullWidth
        autoComplete="email"
        margin="normal"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        className={classes.textField}
        type="password"
        autoComplete="current-password"
        fullWidth
        margin="normal"
        variant="outlined"
      />
    </form>
  );
}
