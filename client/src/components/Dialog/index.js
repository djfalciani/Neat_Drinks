import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "../../components/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  content: {
    marginBottom: 2
  }
}));

export default function DialogBox() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  // DJF - Controlled components
  const [values, setValues] = React.useState({
    email: "",
    password: "",
    userName: "",
    userType: ""
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

  const handleSubmit = () => {
    //logic to add info to the database
    const newUserData = {
      email: values.email,
      password: values.password,
      display_name: values.userName
    };

    // alert(`Signup for new User: Email: ${values.email} Password: ${values.password} Username: ${values.userName}`);
    // console.log(`Signup for new User: Email: ${values.email} Password: ${values.password} Username: ${values.userName}`);
    console.log(newUserData);
    
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
            className={classes.content}
            margin="normal"
            id="password"
            label="password"
            type="password"
            fullWidth
            value={values.password}
            onChange={handleChange('password')}
          />
        
          what would you like your user name to be?
          <TextField
            margin="wide"
            id="displayname"
            label="username"
            type="username"
            variant="outlined"
            fullWidth
            value={values.userName}
            onChange={handleChange('userName')}
          />
          <DialogContentText>business or personal?</DialogContentText>
          <Checkbox />
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
