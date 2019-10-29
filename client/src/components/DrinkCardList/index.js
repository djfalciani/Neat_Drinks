import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
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

export default function DrinkCardList(props) {
  const classes = useStyles();
  const arr = props.barMenu;

  return (
    <List className={classes.root}>

      {Object.keys(props.barMenu).map(function(key) {
        return (
          <DrinkCard
            id={arr[key]._id}
            instructions={arr[key].instruction}
            drinkRating={arr[key].rating}
            drinkName={arr[key].dislpay_name}
          />
        );
      })}
    </List>
  );
}
