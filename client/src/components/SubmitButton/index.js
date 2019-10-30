import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import API from "../../utils/API";
import { useUserContext } from "../../utils/GlobalState"
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    width: "97%"
  },
  div:{
    margin: "auto",
  },
  input: {
    display: "inline" 
  }
}));

export default function SubmitButton() {
  const classes = useStyles();
  const [dispatch] = useUserContext();
  // DJF - Getting text values...
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    API.getLogin({
      email: values.email,
      password: values.password
    }).then(dbAuthUser => {
      console.log(dbAuthUser);
      // Check userType Value
      if (dbAuthUser) {
        // Update Global State...
        dispatch({
          type:"login",
          id: dbAuthUser.data.id,
          userType: dbAuthUser.data.UserTypeId
        });
  
        // Evaluate the User Type value and route accordingly...
        if (dbAuthUser.data.UserTypeId === 2) {
          // Move user to their profile...
          // history.push("/user/" + dbAuthUser.data.id)
          history.push("/user")
        } else  {
          history.push("/bar")
        }
  
      } else {
        // alert("No Account Found. Please sign up!")
        history.push("/")
      }
    })
  };
  
  return (
    <div className={classes.div} fullwidth>
      <Button
        className={classes.root}
        variant="contained"
        fullWidth
        color="primary"
        onClick={handleSubmit}
      >
        Login
      </Button>
    </div>
  );
}
