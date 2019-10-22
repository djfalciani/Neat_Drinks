import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    // width: 500,
    backgroundColor: "inherit"
  },
  card: {
    maxWidth: 72,
    backgroundColor: "inherit",
    boxShadow: "none",
    height: 115
  }
});

export default function Footer() {
  const classes = useStyles();

  const handleClick = () => {
    alert("You clicked the Chip.");
  };

  return (
    <div>
      <BottomNavigation className={classes.root}>
        <Card className={classes.card}>
          <CardMedia
            onClick={handleClick}
            component="img"
            className={classes.media}
            image="/images/neat-Logo-bird.png"
            title="neat"
          />
        </Card>
      </BottomNavigation>
    </div>
  );
}
