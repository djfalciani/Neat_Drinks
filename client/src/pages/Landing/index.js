// import React from "react";
import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import Logo from "../../components/Logo";
// import LoginForm from "../../components/LoginForm";
import DialogBox from "../../components/Dialog";
// import SubmitButton from "../../components/SubmitButton";
// import NewAccountButton from "../../components/NewAccountButton";
import Footer from "../../components/Footer";
import { TextField } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import API from "../../utils/API";

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
    // width: "200"
  },
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important"
  }
}));

export default function Landing() {
  // DJF - brining in style themes...
  const classes = useStyles();
  // DJF - Getting text values...
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  // Submit btn Click...
  const handleSubmit = (e) => {
    e.preventDefault();

    API.getLogin({
      email: values.email,
      password: values.password
    }).then(dbAuthUser => {
      console.log(dbAuthUser);
      // Check userType Value
      if (dbAuthUser.data.UserTypeId = 2) {
        history.push("/user/" + dbAuthUser.data.id)
      } else if (dbAuthUser.data.UserTypeId = 1) {
        history.push("/bar")
      } else {
        // alert("No Account Found. Please sign up!")
        history.push("/")
      }
    })
  };

  return (
    <div>
      <Logo />
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
      value={values.email}
      onChange={handleChange('email')}
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
        value={values.password}
        onChange={handleChange('password')}
      />
      {<br></br>}
      <Button
        className={classes.root}
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleSubmit}
      >
        Login
      </Button>
      {/* <LoginForm /> */}
      {/* <SubmitButton />{<br></br>} */}
      <DialogBox />
        <Footer />
    </div>
  );
}
