import React from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// import Nav from "../../components/Nav";
import LogoText from "../../components/LogoText";
import NewDrinkButton from "../../components/NewDrinkButton";
import Footer from "../../components/Footer";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
// import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
// import DrinkCardList from "../../components/DrinkCardList";
// import { typography } from "@material-ui/system";
// import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));
export default function User() {
  const classes = useStyles();
  return (
    <div>
      <LogoText />

      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="primary">
          Seven Seas
        </Typography>
        <Typography align="right" variant="h7" component="h5" color="secondary">
          www.sevenseas.com
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Grid>
          <Grid item xs={9}>
            Your Bar's Drinks are below
          </Grid>
          <Grid item xs={3}>
            <NewDrinkButton />
          </Grid>
        </Grid>
      </Paper>
      <Paper className={classes.root}>
        {/* <DrinkCardList /> */}
      </Paper>
      <Footer />
    </div>
  );
}
