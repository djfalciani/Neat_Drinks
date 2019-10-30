import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { useUserContext } from "../../utils/GlobalState";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 6
  }, 
  button: {
    padding: theme.spacing(2),
    margin: theme.spacing(1),
    marginLeft: 120,
    width: 250
  },
  textfield: {
    width: 250,
  }
}));

export default function ReviewForm() {
  const [state, dispatch] = useUserContext();
  const classes = useStyles();
  // eslint-disable-next-line
  // const [stateUser, dispatch] = useUserContext();

  const [userReview, setUserReview] = useState({
    Rating: 0,
    Review: ""
  });

  const handleRatingChange = event => {
    const { value } = event.target;
    const numRating = parseInt(value);
    setUserReview({
      ...userReview,
      Rating: numRating
    });
  };

  const handleReviewChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setUserReview({
      ...userReview,
      [name]: value
    });
    console.log(userReview.Rating);
  };

  const handleFormSubmit = async function(e) {
    e.preventDefault();
    const theReview = {
      // UserId: userReview.UserId,
      // DrinkId: userReview.DrinkId,
      UserId: state.id,
      DrinkId: state.drinkId,
      Review: userReview.Review,
      Rating: userReview.Rating
    };
    // console.log(theReview);
    // eslint-disable-next-line
    // const response = await fetch("api/createreview", {
    const response = await fetch("api/createreview", {
      method: "POST",
      body: JSON.stringify(theReview),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    }).then(() => {});
  };

  useEffect(() => {}, []);

  return (
    <form className="commentForm" onSubmit={handleFormSubmit}>
      <TextField
        id="your-review"
        label="Your Review"
        name="Review"
        onChange={handleReviewChange}
        className={classes.textField}
        margin="normal"
        variant="filled"
        multiline
        fullWidth
        rows="2"
      />
      <TextField
        fullWidth
        name="Rating"
        margin="normal"
        label="Your Score"
        className={classes.textField}
        value={userReview.Rating}
        onChange={handleRatingChange}
      ></TextField>

      <Button
        className={classes.button}
        type="submit"
        value="submit"
        color="primary"
        
        // onClick={handleFormSubmit}
      >
        submit
      </Button>
    </form>
  );
}