import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import DrinkReviewCard from "../DrinkReviewCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));

export default function DrinkReviewList(props) {
  const classes = useStyles();
  const arr = props.reviews;
  // console.log(arr);

  var test = {
    Rating: 100,
    Review: "John Review - Manhattan",
    createdAt: "2019-10-26T13:26:31.000Z",
    updatedAt: "2019-10-26T13:26:31.000Z",
    DrinkId: 2
  };

  return (
    <List className={classes.root}>
      {/* {console.log(props.drinksIveRated)} */}

      {Object.keys(arr).map(function(key) {
        return (
          <DrinkReviewCard
            id={arr[key].DrinkId}
            review={arr[key].Review}
            drinkRating={arr[key].Rating}
            // drinkName={arr[key].dislpay_name}
          />
        );
      })}
    </List>
  );
}
