import React,  from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3,
  }
}));

export default function UserDrinkReviewCard(props) {
  const classes = useStyles();
  // console.log(props);

  return (
    <ListItem alignItems="flex-start" className={classes.root}>
      {/* <Link to={`/drink/${props.id}`}> */}
      <ListItemAvatar>
        <Avatar
          alt=""
          src="https://neat-drinks.herokuapp.com/images/neat-Logo-abstract.png"
        />
      </ListItemAvatar>
      {/* </Link> */}

      <ListItemText
        primary={props.id}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
            >
              {props.drinkReview}
            </Typography>
          </React.Fragment>
        }
      />

      <ListItemAvatar>{props.drinkRating}</ListItemAvatar>
    </ListItem>
  );
}
