import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { Button, Box, TextField } from "@material-ui/core/";
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

export default function BarUser() {
  const classes = useStyles();
  const [loggedUser, setLoggedUser] = useState({});
  const [ratedDrinks, setRatedDrinks] = useState({});

  useEffect(() => {
    async function fetchData() {
      // Get the user info
      const loggedUser$ = await fetch("/api/user/3");
      const fetchedUser = await loggedUser$.json();
      // console.log(fetchedUser);

      setLoggedUser(fetchedUser);

      const ratedDrinks$ = await fetch("api/user/rated");
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
        <Typography variant="h3" component="h1" color="primary" align="center">
          <strong>Seven Seas</strong>
        </Typography>
        <Typography
          align="center"
          variant="h7"
          component="h5"
          color="secondary"
        >
          www.sevenseas.com
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Grid>
          <Grid item xs={9}>
            <Typography variant="h4">
              <em>Drinks from Seven Seas</em>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <DrinkCardList />
          </Grid>
          <NewDrinkButton />
        </Grid>
      </Paper>

      <Paper className={classes.root}>
        {/* <DrinkCardList /> */}
      </Paper>

      <Link to="/search">
        <Footer />
      </Link>
    </div>
  );
}
