import React, { Link } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));

export default function DrinkReviewCard(props) {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar src="https://neat-drinks.herokuapp.com/images/neat-Logo-abstract.png" />
      </ListItemAvatar>

      <ListItemText
        primary={props.username}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
            >
              {props.review}
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemAvatar>{props.drinkRating}</ListItemAvatar>
    </ListItem>
  );
}
