import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

import { useUserContext } from "../../utils/GlobalState";

const useStyles = makeStyles({
  root: {
    backgroundColor: "inherit",
    textAlign: "center"
  },
  card: {
    backgroundColor: "inherit",
    boxShadow: "none"
  }
});

export default function LogoText() {
  const classes = useStyles();

  const [state, dispatch] = useUserContext();

  var theLink = "";
  // console.log("usertype below");
  // console.log(state.userType);

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
