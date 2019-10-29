import React, { useEffect, useState } from "react";
import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";
import UserReviewList from "../../components/UserReviewList";

import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

// DJF - attempting to use context to access a Global Store...
import { useUserContext } from "../../utils/GlobalState"

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

function User() {
  const classes = useStyles();
  const [loggedUser, setLoggedUser] = useState({});
  const [ratedDrinks, setRatedDrinks] = useState({});
  const [state, dispatch] = useUserContext();
  // const [_, dispatch] = useUserContext();

  useEffect(() => {
    async function fetchData() {
      // Get the user info
      // const loggedStateGlobalUser = state.id;
      // console.log(loggedStateGlobalUser);
      const loadingUser = 2;
      // const loadingUser = state.id;
      console.log(loadingUser);
      const loggedUser$ = await fetch(`/api/user/${loadingUser}`);
      const fetchedUser = await loggedUser$.json();
      // console.log(fetchedUser);

      setLoggedUser(fetchedUser);

      const ratedDrinks$ = await fetch(`api/userrated/${loadingUser}`);
      const fetchedDrinks = await ratedDrinks$.json();
      // console.log(fetchedDrinks);
      setRatedDrinks(fetchedDrinks);
    }
    fetchData();
  }, []);

  return (
    <div>
      {/* {console.log("hi")} */}
      <LogoText />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="primary">
          {loggedUser.display_name}
        </Typography>
        <Typography variant="h7" component="h5" color="secondary">
          {loggedUser.tag_line}
        </Typography>
      </Paper>
      <Paper className={classes.root}>Your rated Drinks are below</Paper>
      <Paper className={classes.root}>
        <UserReviewList drinksIveRated={ratedDrinks} />
      </Paper>
      <Footer />
    </div>
  );
}
export default User;
