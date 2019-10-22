import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

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
    background: "orange"
  }
}));

export default function DrinkCard() {
  const classes = useStyles();

  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Drink Name" src="" />
      </ListItemAvatar>
      <ListItemText
        primary="Piñacolada"
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              variant="body2"
              className={classes.inline}
              color="textSecondary"
            >
              If you like making love at Midnight!
            </Typography>
          </React.Fragment>
        }
      />
      <ListItemAvatar>
        {/* <Avatar alt="Drink Score" src="" value="99.5"/> */}
        99.5
      </ListItemAvatar>
    
    </ListItem>

    // <div className={classes.root}>
    //   <Box border={1} borderColor="primary.main" borderRadius={4}>
    //     <Paper
    //       border={1}
    //       borderColor="primary.main"
    //       borderRadius={16}
    //       className={classes.paper}
    //     >
    //       <Grid container spacing={1}>
    //         <Grid item>
    //           <ButtonBase className={classes.image}>
    //             <img
    //               className={classes.img}
    //               alt="complex"
    //               src="/images/neat-Logo-abstract.png"
    //             />
    //           </ButtonBase>
    //         </Grid>
    //         <Grid item xs={12} sm container>
    //           <Grid item xs container direction="column" spacing={2}>
    //             <Grid item xs>
    //               <Typography gutterBottom variant="subtitle1">
    //                 Piñacolada
    //               </Typography>
    //               <Typography variant="body2" gutterBottom>
    //                 If you're not into yoga, if you have half a brain
    //               </Typography>
    //               <Typography variant="body2" color="textSecondary">
    //                 Rum • Pinapple Juice • Coconut
    //               </Typography>
    //             </Grid>
    //             {/* <CustomizedSlider></CustomizedSlider> */}
    //           </Grid>
    //           <Grid item>
    //             <Typography variant="subtitle1">89.5</Typography>
    //           </Grid>
    //         </Grid>
    //       </Grid>
    //     </Paper>
    //   </Box>
    // </div>
  );
}
