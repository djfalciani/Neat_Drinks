import React from "react";
// import { Button, Box, TextField } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

// import Nav from "../../components/Nav";
import Logo from "../../components/Logo";
import RecipeForm from "../../components/RecipeForm";
import RecipeFormDetail from "../../components/RecipeFormDetail";
import Footer from "../../components/Footer";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));
export default function Recipe() {
  const classes = useStyles();
  return (
    <div>
      <Logo />
      <RecipeForm />
      <Divider />
      <Paper className={classes.root}>
        <Typography variant="h7" component="h3">
          You can provide a more detailed Recipie Below.
        </Typography>
      <RecipeFormDetail />
      </Paper>
      <Footer />
    </div>
  );
}
