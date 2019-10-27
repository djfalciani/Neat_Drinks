import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import LogoText from "../../components/LogoText";
import Footer from "../../components/Footer";

import RatingSlider from "../../components/RatingSlider";
import DrinkReviewList from "../../components/DrinkReviewList";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  }
}));
export default function DrinkReview() {
  const classes = useStyles();
  const [drink, setDrink] = useState({});
  const [drinkMaker, setdrinkMaker] = useState({});
  const [DrinkReviews, SetDrinkReviews] = useState({});
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
      // console.log(fetchedReviews);
      SetDrinkReviews(fetchedReviews);

      // ? Get the Drink Maker
      const maker$ = await fetch(`api/user/${userSearch}`);
      const fetchedMaker = await maker$.json();
      // console.log(fetchedMaker);
      setdrinkMaker(fetchedMaker);

      // ? Make Drink Average
      // const drinkScores = [];
      var drinkScoreTotal = 0;
      for (var i = 0; i < fetchedReviews.length; i++) {
        // console.log();
        drinkScoreTotal += fetchedReviews[i].Rating;
        // drinkScores.push(fetchedReviews[i].Rating);
      }
      var drinkAvg = drinkScoreTotal / fetchedReviews.length;
      // console.log(drinkAvg);

      SetDrinkAverage({ ...drinkAverage, avg: drinkAvg });
      // console.log(drinkAverage);
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
        Cocktail Average
        <Typography align="right" variant="h2" component="h2" color="secondary">
          {/* 89.fake */}
          {drinkAverage.avg}
          {/* {console.log(drinkAverage)} */}
        </Typography>
      </Paper>
      {/* <Paper className={classes.root}>
        Your Rating
        <RatingSlider />
      </Paper> */}

      {/* {console.log(typeof DrinkReviews)} */}

      <Paper className={classes.root}>
        <DrinkReviewList reviews={DrinkReviews} />
      </Paper>
      <Link to="/search">
        <Footer />
      </Link>
    </div>
  );
}
