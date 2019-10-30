import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
// import abstractlogo from "../../../public/images/neat-Logo-abstract.png"
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

export default function DrinkCard(props) {
  const classes = useStyles();

  const handleClick = () => {
    alert(`you clicked the drink card-${props.id}`);
   
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt=""
          src="https://neat-drinks.herokuapp.com/images/neat-Logo-abstract.png"
          data-id={props.id}
          onClick={handleClick}
          // link="`./drinkreview/${props.id}`"
        />
      </ListItemAvatar>
      <ListItemText
        primary={props.drinkName}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
            >
              {props.instructions}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemAvatar>{props.drinkRating}</ListItemAvatar>
    </ListItem>
  );
}
