  import React from "react";
  import { Link } from "react-router-dom";
  import { makeStyles } from "@material-ui/core/styles";
  import Card from "@material-ui/core/Card";
  import CardMedia from "@material-ui/core/CardMedia";

  const useStyles = makeStyles({
    card: {
      width: "80%",
      margin: "auto",
      backgroundColor: "inherit",
      boxShadow: "none",
      marginBottom: 35
    }
  });

  export default function Logo() {
    const classes = useStyles();

    return (
      <Link to="/user">
        <Card className={classes.card}>
          <CardMedia
            component="img"
            image="/images/neat-Logo.png"
            title="neat"
          />
        </Card>
      </Link>
    );
  }
