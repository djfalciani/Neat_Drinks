import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

// import SearchField from "../SearchField";
import DrinkCardList from "../DrinkCardList";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    margin: 3
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  dense: {
    marginTop: theme.spacing(2)
  },
  menu: {
    width: 200
  }
}));

export default function RecipeForm() {
  const classes = useStyles();
  const [searchTerm, setSearchTerm] = useState({ searchTerm: "" });
  const [searchResult, setSearchResults] = useState({});

  // const handleChange = name => event => {
  //   setValues({ ...values, [name]: event.target.value });
  // };
  const handleChange = event => {
    const { value } = event.target;
    setSearchTerm({ ...searchTerm, searchTerm: value });
    // console.log(searchTerm.searchTerm);
  };

  const handleFormSubmit = async function(e) {
    e.preventDefault();
    const q = searchTerm.searchTerm;

    // eslint-disable-next-line
    const Results$ = await fetch(`/api/searchdrinks/${q}`)
      .then
      // alert(`Searched for drinks with ${q}`)
      ();
    const fetchedResults = await Results$.json();
    setSearchResults(fetchedResults);

    console.log("fetched results");
    console.log(fetchedResults);
  };

  useEffect(() => {
    setSearchResults();
    const updateResults = async function(e) {
      e.preventDefault();
      const q = searchTerm.searchTerm;

      // eslint-disable-next-line
      const Results$ = await fetch(`/api/searchdrinks/${q}`)
        .then
        // alert(`Searched for drinks with ${q}`)
        ();
      const fetchedResults = await Results$.json();
      setSearchResults(fetchedResults);

      console.log("fetched results");
      console.log(fetchedResults);
    };
  }, [searchResult]);

  return (
    <Paper>
      <Paper>
        {" "}
        <form
          className={classes.container}
          noValidate
          autoComplete="on"
          onSubmit={handleFormSubmit}
        >
          <TextField
            required
            id="Search-id"
            label="searchTerm"
            // defaultValue="Search for a drink"
            // value={searchTerm.searchTerm}
            className={classes.textField}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="filled"
          />
          {/* <SearchField /> */}
          <Divider />
        </form>
      </Paper>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h1" color="secondary">
          Results are below
        </Typography>
      </Paper>
      <Paper className={classes.root}>
        <searchResultList resultsR={searchResult} />
      </Paper>
    </Paper>
  );
}
