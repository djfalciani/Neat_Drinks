import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1)
    },
    input: {
      display: 'none'
    }
  }));

  
  export default function SubmitButtonRecipe() {
    const classes = useStyles();

    const handleButtonClick = (event) =>{
        console.log(event.target)
        alert("clicked bruh")
    }

    return (
      <div>
        <Button 
        onClick= {handleButtonClick}
        name="drink-recipe-button"
        variant="contained" 
        fullWidth 
        color="primary"
        className={classes.button}>
          Submit
        </Button>
      </div>
    );
  }