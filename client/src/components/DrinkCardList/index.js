import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";
import DrinkCard from "../DrinkCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function DrinkCardList() {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <DrinkCard />
      <Divider variant="full" component="li" />
      <DrinkCard />{" "}
    </List>
  );
}
