import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { useUserContext } from "../../utils/GlobalState";

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

  const [state, dispatch] = useUserContext();

  var theLink = "";

  // Evaluate the User Type value and route accordingly...
  if (state.userType === 1) {
    // Move user to their profile...
    // history.push("/user/" + dbAuthUser.data.id)
    theLink = "/bar";
    // history.push("/user");
  } else {
    theLink = "/user";
    // history.push("/bar");
  }

  return (
    <Link to={theLink}>
      <Card className={classes.card}>
        <CardMedia component="img" image="/images/neat-Logo.png" title="neat" />
      </Card>
    </Link>
  );
}
