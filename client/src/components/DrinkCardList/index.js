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
  const arr = props.drinksIveRated;
  console.log("HILO");

  var Iratings = Object.keys(props.drinksIveRated).map(function(key) {
    console.log(arr[key]);
  });

  console.log(typeof Iratings);

  return (
    <List className={classes.root}>
      {/* {console.log(props.drinksIveRated)} */}

      {Object.keys(props.drinksIveRated).map(function(key) {
        return (
          <DrinkCard
            id={arr[key].DrinkId}
            drinkReview={arr[key].Review}
            drinkRating={arr[key].Rating}
          />
        );
      })}
      {/* {this.state.friends.map(friend => (
        <FriendCard
          removeFriend={this.removeFriend}
          id={friend.id}
          key={friend.id}
          name={friend.name}
          image={friend.image}
          occupation={friend.occupation}
          location={friend.location}
        />
      ))} */}

      {/* {props.drinksIveRated.map(drink => (
        <DrinkCard id={drink.id} />
      ))} */}

      <DrinkCard />
    </List>
  );
}
