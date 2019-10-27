import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import LogoText from "../../components/LogoText";
import NewDrinkButton from "../../components/NewDrinkButton";
import Footer from "../../components/Footer";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import DrinkCardList from "../../components/DrinkCardList";
// import DrinkCardList from "../../components/DrinkCardList";
// import { typography } from "@material-ui/system";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

export default function BarProfile() {
  const classes = useStyles();
  const [loggedUser, setLoggedUser] = useState({});
  const [barsMenu, setbarsMenu] = useState({});

  useEffect(() => {
    async function fetchData() {
      // Get the user info
      const loadingUser = 3;
      const loggedUser$ = await fetch(`/api/user/${loadingUser}`);
      const fetchedUser = await loggedUser$.json();
      // console.log(fetchedUser);

      setLoggedUser(fetchedUser);

      const barsDrinks$ = await fetch(`api/usercreated/${loadingUser}`);
      const fetchedDrinks = await barsDrinks$.json();
      console.log(fetchedDrinks);
      setbarsMenu(fetchedDrinks);
    }
    fetchData();
  }, []);
  return (
    <div>
      <LogoText />

      <Paper className={classes.root}>
        <Typography variant="h3" component="h1" color="primary" align="center">
          <strong>{loggedUser.display_name}</strong>
        </Typography>
        <Typography
          align="center"
          variant="h7"
          component="h5"
          color="secondary"
        >
          {loggedUser.Website}
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Grid>
          <Grid item xs={9}>
            <Typography variant="h6">
              {loggedUser.display_name}'s Cocktail Menu
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DrinkCardList barMenu={barsMenu} />
          </Grid>
          <NewDrinkButton />
        </Grid>
      </Paper>

      <Paper className={classes.root}>{/* <DrinkCardList /> */}</Paper>

      <Footer />
    </div>
  );
}
