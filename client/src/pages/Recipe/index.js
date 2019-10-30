import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Logo from "../../components/Logo";
import RecipeForm from "../../components/RecipeForm";
// import RecipeFormDetail from "../../components/RecipeFormDetail";
import Footer from "../../components/Footer";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

export default function Recipe() {
  // DJF - adding this back in. Was throwing compiler issue
  const classes = useStyles();
  return (
    <div>
      <Logo />
      <Paper className={classes.root}>
        <RecipeForm />
      </Paper>
      {/* <Paper className={classes.root}>
        <Typography variant="h7" component="h3">
          <em>Recipe detail</em>
        </Typography>
        <RecipeFormDetail />
      </Paper> */}
      <Footer />
    </div>
  );
}
