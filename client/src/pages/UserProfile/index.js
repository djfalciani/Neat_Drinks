import React, { useEffect, useState } from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// import Nav from "../../components/Nav";
import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";
import DrinkCardList from "../../components/DrinkCardList";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

function User() {
  const classes = useStyles();
  const [loggedUser, setLoggedUser] = useState({});
  useEffect(() => {
    async function fetchData() {
      const loggedUser$ = await fetch("/api/user");
      const fetchedUser = await loggedUser$.json();
      // useState(loggedUser);
      // console.log(loggedUser.username);
      console.log(fetchedUser);

      // const myguy = loggedUser.username;
      setLoggedUser(fetchedUser);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* {console.log("hi")} */}
      <LogoText />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="primary">
          {" "}
          {loggedUser.display_name}
        </Typography>
        <Typography variant="h7" component="h5" color="secondary">
          …enjoys getting caught in the rain
        </Typography>
      </Paper>
      <Paper className={classes.root}>Your rated Drinks are below</Paper>
      <Paper className={classes.root}>
        <DrinkCardList />
      </Paper>
      <Footer />
    </div>
  );
}
export default User;
