import React, { useEffect, useState } from "react";
import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";
import UserReviewList from "../../components/UserReviewList";
import { makeStyles } from "@material-ui/core/styles";
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
  const [ratedDrinks, setRatedDrinks] = useState({});

  useEffect(() => {
    async function fetchData() {
      // Get the user info
      const loadingUser = 1;
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
