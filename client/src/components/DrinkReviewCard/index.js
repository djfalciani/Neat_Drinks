import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(4),
    margin: "auto",
    marginTop: 1,
    maxWidth: 500
  },
  box: {
    border: 1,
    borderColor: "primary.main"
  },
  image: {
    width: 72,
    height: 72
  },
  img: {
    margin: "auto",
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%"
  }
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Box border={1} borderColor="primary.main" borderRadius={4}>
        <Paper
          border={1}
          borderColor="primary.main"
          borderRadius={16}
          className={classes.paper}
        >
          <Grid container spacing={1}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={2}>
                <Grid item xs>
                  <Typography gutterBottom variant="body2">
                    Drink was meh
                  </Typography>

                  <Typography
                    variant="body2"
                    align="right"
                    color="textSecondary"
                  >
                    …from user Michael Cain
                  </Typography>
                </Grid>
              </Grid>
              <Grid item>
                <Typography variant="subtitle1">89.5</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Box>
    </div>
  );
}
