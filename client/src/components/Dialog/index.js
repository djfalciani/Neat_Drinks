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
    marginBottom: 50
  }
}));

export default function DialogBox() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    //logic to add info to the database
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
          />
          <TextField
            className={classes.content}
            margin="wide"
            id="displayname"
            label="public or display name"
            type="username"
            fullWidth
            helperText="this is the name people will use to search for you"

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
