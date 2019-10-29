import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
  root: {
    backgroundColor: "inherit",
    textAlign: "center",
  },
  card: {
    backgroundColor: "inherit",
    boxShadow: "none"
  }
});

export default function Logo() {
  const classes = useStyles();

  return (
    <Link to="/">
      <Card className={classes.card}>
        <CardMedia
          component="img"
          className={classes.media}
          image="/images/neat-Logo-Text.png"
          title="neat"
        />
      </Card>
    </Link>
  );
}
