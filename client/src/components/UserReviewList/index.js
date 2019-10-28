import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import UserDrinkReviewCard from "../UserDrinkReviewCard";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
}));

export default function UserReviewList(props) {
  const classes = useStyles();
  const arr = props.drinksIveRated;
  // console.log("User REview List");

  // var Iratings = Object.keys(props.drinksIveRated).map(function(key) {
  //   console.log(arr[key]);
  // });

  // console.log(typeof Iratings);

  return (
    <List className={classes.root}>
      {/* {console.log(props.drinksIveRated)} */}

      {Object.keys(props.drinksIveRated).map(function(key) {
        return (
          <UserDrinkReviewCard
            id={arr[key].DrinkId}
            drinkReview={arr[key].Review}
            drinkRating={arr[key].Rating}
          />
        );
      })}
    </List>
  );
}
