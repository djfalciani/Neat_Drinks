import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
// import tileData from './tileData';
import DrinkReviewCard from "../DrinkReviewCard";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: 500,
    height: 450
  }
}));


export default function DrinkReviewList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={160} className={classes.gridList} cols={1}>

        {/* TODO This section needs to loop through whatever Array of drinks is sent to it and then output a list of Drink Cards */}
        <GridListTile>
          <DrinkReviewCard />
        </GridListTile>
        <GridListTile>
          <DrinkReviewCard />
        </GridListTile>
        <GridListTile>
          <DrinkReviewCard />
        </GridListTile>
        <GridListTile>
          <DrinkReviewCard />
        </GridListTile>
        <GridListTile>
          <DrinkReviewCard />
        </GridListTile>
        <GridListTile>
          <DrinkReviewCard />
        </GridListTile>
        {/* {tileData.map(tile => (
          <GridListTile key={tile.img} cols={tile.cols || 1}>
            <img src={tile.img} alt={tile.title} />
          </GridListTile>
        ))} */}
      </GridList>
    </div>
  );
}
