import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";

import ReviewForm from "../../components/ReviewForm";
import DrinkReviewList from "../../components/DrinkReviewList";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 6
  }
}));

export default function DrinkReview() {
  const classes = useStyles();
  const [drink, setDrink] = useState({});
  const [drinkMaker, setdrinkMaker] = useState({});
  const [DrinkReviews, SetDrinkReviews] = useState({});
  const [DrinkReviews2, SetDrinkReviews2] = useState({});
  const [drinkAverage, SetDrinkAverage] = useState({ avg: 0 });
  
  useEffect(() => {
    async function fetchData() {
      // ? Get the user info
      const loadDrinkId = 2;
      const userSearch = 3;
      const theDrink$ = await fetch(`/api/drink/${loadDrinkId}`);
      const fetchedDrink = await theDrink$.json();
      // console.log(fetchedDrink);

      setDrink(fetchedDrink);
      
      // ? Get the drinks reviews
      const reviews$ = await fetch(`api/reviews/${loadDrinkId}`);
      const fetchedReviews = await reviews$.json();
      SetDrinkReviews(fetchedReviews);
      
      // Get Drinks Reviews v2 - returns back all drink_User_Rating data + User_Name & Drink_Name
      const reviews2$ = await fetch(`api/reviews2/${loadDrinkId}`);
      const fetchedReviews2 = await reviews2$.json();
      console.log(fetchedReviews2);
      SetDrinkReviews2(fetchedReviews2);

      // ? Get the Drink Maker
      const maker$ = await fetch(`api/user/${userSearch}`);
      const fetchedMaker = await maker$.json();
      setdrinkMaker(fetchedMaker);

      // ? Make Drink Average
      var drinkScoreTotal = 0;
      for (var i = 0; i < fetchedReviews.length; i++) {
        drinkScoreTotal += fetchedReviews[i].Rating;
      }
      var drinkAvg = drinkScoreTotal / fetchedReviews.length;

      SetDrinkAverage({ ...drinkAverage, avg: drinkAvg });
    }
    fetchData();
  }, []);

  return (
    <div>
      <LogoText />
      
      <Paper className={classes.root}>
        <Typography variant="h5" component="h1" color="error">
          {drink.dislpay_name}
        </Typography>
        <Typography align="right" variant="h7" component="h5" color="secondary">
          from {drinkMaker.display_name}
        </Typography>
      </Paper>
      <Paper className={classes.root}>
      <Typography align="right" variant="h7" component="h7" color="error">
          {drink.instruction}
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <ReviewForm />
      </Paper>
      <Paper className={classes.root}>
        Cocktail Average
        <Typography align="right" variant="h2" component="h2" color="secondary">
          {drinkAverage.avg}
        </Typography>
      </Paper>

      {/* {console.log(typeof DrinkReviews)} */}

      <Paper className={classes.root}>
        <DrinkReviewList reviews={DrinkReviews2} />
      </Paper>
      <Link to="/search">
        <Footer />
      </Link>
    </div>
  );
}
