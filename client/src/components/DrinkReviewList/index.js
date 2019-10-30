import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import DrinkReviewCard from "../DrinkReviewCard";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

export default function DrinkReviewList(props) {
  const classes = useStyles();
  const arr = props.reviews;
  // console.log(arr);

  return (
    <List className={classes.root}>
      {/* {console.log(props.drinksIveRated)} */}

      {Object.keys(arr).map(function(key) {
        return (
          <DrinkReviewCard
            id={arr[key].DrinkId}
            review={arr[key].Review}
            username={arr[key].User_Name}
            drinkRating={arr[key].Rating}
            // drinkName={arr[key].dislpay_name}
          />
        );
      })}
    </List>
  );
}
