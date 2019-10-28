import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import RatingSlider from "../../components/RatingSlider";
import { userInfo } from "os";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 0
  }
}));

export default function ReviewForm() {
  const classes = useStyles();
  const [userReview, setUserReview] = useState({
    Rating: 0,
    Review: "",
    DrinkId: 2,
    UserId: 2
  });

  const handleReviewChange = event => {
    console.log(event.target.value);
    const { name, value } = event.target;
    setUserReview({
      ...userReview,
      [name]: value
    });
    console.log(userReview.Rating)
  };

  const handleFormSubmit = async function(e) {
    e.preventDefault();
    // console.log(drinkName.drinkName);
    const review = {
      UserId: userReview.UserId,
      DrinkId: userReview.DrinkId,
      Review: userReview.Review,
      Rating: userReview.Rating
    };
    // eslint-disable-next-line
    const response = await fetch("api/createreview", {
      method: "POST",
      body: JSON.stringify(review),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
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
        // helperText="Place your Drink Recipe here"
      />
      <RatingSlider value={userReview.Rating} onChange={handleReviewChange} />

      <Button
        className={classes.button}
        fullWidth
        variant="outlined"
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
