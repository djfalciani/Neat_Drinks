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

export default function searchResultList(props) {
  const classes = useStyles();
  const arr = props.resultsR;

  return (
    <List className={classes.root}>
      {console.log("you made it to the search result")}
      {console.log(props.resultR)}

      {Object.keys(arr).map(function(key) {
        return (
          <DrinkCard
            id={arr[key].id}
            instructions={arr[key].instruction}
            drinkRating={arr[key].rating}
            drinkName={arr[key].dislpay_name}
          />
        );
      })}
    </List>
  );
}
 
