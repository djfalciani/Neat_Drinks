
import React, { useEffect, useState } from "react";

// * Material UI 
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";


// * Components
import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";
import UserReviewList from "../../components/UserReviewList";


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
  // States
  const [loggedUser, setLoggedUser] = useState({});
  const [ratedDrinks, setRatedDrinks] = useState({});
  const [stateUser, dispatch] = useUserContext();

  useEffect(() => {
    async function fetchData() {
      // Get the user info from Global State. if we don't have an object just hard code to 2 for now...
      let loadingUser = stateUser.id;
      
      if (stateUser.id === 0) {
        loadingUser =2;
      } else {
        loadingUser = stateUser.id;
      }
      const loggedUser$ = await fetch(`/api/user/${loadingUser}`);
      const fetchedUser = await loggedUser$.json();
      
      setLoggedUser(fetchedUser);
      
      // console.log(loadingUser);
      const ratedDrinks$ = await fetch(`api/userrated/${loadingUser}`);
      const fetchedDrinks = await ratedDrinks$.json();
      // console.log(fetchedDrinks);
      setRatedDrinks(fetchedDrinks);
    }
    fetchData();
  }, []);

  return (
    <Container>
      <LogoText />
      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="error">
          {loggedUser.display_name}
        </Typography>
        <Typography variant="h7" component="h5" color="secondary">
          {loggedUser.tag_line}
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h6" component="h6" color="primary">
          Your rated Drinks are below
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <UserReviewList drinksIveRated={ratedDrinks} />
      </Paper>
      <Footer />
    </Container>
  );
}
export default User;
