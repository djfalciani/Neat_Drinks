import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import UserDrinkReviewCard from "../UserDrinkReviewCard";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

export default function UserReviewList(props) {
  const classes = useStyles();
  const arr = props.drinksIveRated;
  

  return (
    <List className={classes.root}>
      {/* {console.log(props.drinksIveRated)} */}

      {Object.keys(props.drinksIveRated).map(function(key) {
        return (
          <UserDrinkReviewCard
            id={arr[key].DrinkId}
            drinkReview={arr[key].Review}
            drinkRating={arr[key].Rating}
            drinkName={arr[key].drink_Name}
          />
        );
      })}
    </List>
  );
}
