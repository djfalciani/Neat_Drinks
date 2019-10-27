import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
// import abstractlogo from "../../../public/images/neat-Logo-abstract.png"
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import { getThemeProps } from "@material-ui/styles";

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
  

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="" src="https://neat-drinks.herokuapp.com/images/neat-Logo-abstract.png" />
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
