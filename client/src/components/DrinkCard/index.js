import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import { useHistory } from "react-router-dom";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
// import abstractlogo from "../../../public/images/neat-Logo-abstract.png"
import Typography from "@material-ui/core/Typography";
import { useUserContext } from "../../utils/GlobalState"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    marginTop: 1,
    maxWidth: 500
  },
  box: {
    border: 1,
    borderColor: "primary.main"
  },
  image: {
    width: 72,
    height: 72
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    background: "orange"
  }
}));

export default function DrinkCard(props) {
  const classes = useStyles();
  const history = useHistory();
  const [state, dispatch] = useUserContext();

  const handleClick = () => {
    alert(`you clicked the drink card-${props.id}`);
    setDrinkId();
    setDrinkOwner();
    history.push(`/drink`);
  };

  const setDrinkId = () => {
    dispatch({
      type: "SET_DRINK",
      drinkId: props.id
    });
  };
  
  const setDrinkOwner = () => {
    dispatch({
      type: "SET_DRINK_OWNER",
      drinkOwner: 3
    });
  };

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar
          alt=""
          src="https://neat-drinks.herokuapp.com/images/neat-Logo-abstract.png"
          data-id={props.id}
          onClick={handleClick}
          // link="./drinkreview/${props.id}"
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