import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";
import DrinkCardList from "../../components/DrinkCardList";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }, 
  headerText: {
    fontColor: "#fac729"
  }
}));
export default function User() {
  const classes = useStyles();
  return (
    <div>
      <LogoText />

      <Paper className={classes.root}>
        <Typography variant="h4" component="h1" color="primary">
          Tom Cruise (a user name)
        </Typography>
        <Typography variant="caption" component="h5" align="right">
          …enjoys getting caught in the rain (a user's tagline)
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h4" className="headerText" gutterBottom>
          <em>Rated drinks:</em>
        </Typography>
        <DrinkCardList/>
      </Paper>
      <Link to="/search">
        <Footer />
      </Link>
    </div>
  );
}
