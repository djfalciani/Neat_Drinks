// import React, { useEffect, useState } from "react";
import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
// import Checkbox from "../../components/Checkbox";
import API from "../../utils/API";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  content: {
    marginBottom: 50
  }
}));

export default function DialogBox() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // DJF - Controlled components
  const [values, setValues] = useState({
    email: "",
    password: "",
    userName: "",
    radioVal: "business",
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e) => {
    //logic to add info to the database
    //e.preventDefault();

    let userType = 0;

    if (values.radioVal === "business") {
      userType = 1;
    } else {
      userType = 2;
    }
    
    const newUserData = {
      email: values.email,
      password: values.password,
      display_name: values.userName,
      userTypeId: userType
    };

    // console.log(newUserData);

    API.createUser({newUserData}).then(dbNewUser => console.log(dbNewUser))

    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClickOpen}
        fullWidth
      >
        create account
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Account</DialogTitle>
        <DialogContent>
          <TextField
            required
            autoFocus
            margin="normal"
            id="name"
            label="email address"
            type="email"
            fullWidth
            value={values.email}
            onChange={handleChange('email')}
          />
          <TextField
            required
            className={classes.content}
            margin="normal"
            id="password"
            label="password"
            type="password"
            autoComplete="current-password"
            fullWidth
            value={values.password}
            onChange={handleChange('password')}
          />
          <TextField
            className={classes.content}
            margin="wide"
            id="displayname"
            label="public or display name"
            type="username"
            fullWidth
            helperText="this is the name people will use to search for you"
            value={values.userName}
            onChange={handleChange('userName')}

          />
          <DialogContentText>business or personal?</DialogContentText>
          <RadioGroup aria-label="account type" name="account-type" value={values.radioVal} onChange={handleChange('radioVal')}>
            <FormControlLabel value="business" control={<Radio />} label="business" />
            <FormControlLabel value="personal" control={<Radio />} label="personal" />
          </RadioGroup>
          {/* <Checkbox/> */}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            cancel
          </Button>
          <Button onClick={handleSubmit} color="error">
            create
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
