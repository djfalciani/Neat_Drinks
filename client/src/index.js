import React from "react";
import ReactDOM from "react-dom";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    common: { black: "rgba(47, 51, 110, 1)", white: "#fff" },
    background: {
      paper: "rgba(5, 25, 53, 1)",
      default: "rgba(3, 23, 53, 1)"
    },
    primary: {
      light: "rgba(248, 231, 28, 1)",
      main: "rgba(247, 103, 34, 1)",
      dark: "rgba(207, 73, 8, 1)",
      contrastText: "rgba(255, 255, 255, 1)"
    },
    secondary: {
      light: "rgba(55, 247, 247, 1)",
      main: "rgba(17, 77, 105, 1)",
      dark: "rgba(1, 104, 126, 1)",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(216, 255, 176, 1)",
      secondary: "rgba(247, 103, 34, 1)",
      disabled: "rgba(180, 32, 79, 1)",
      hint: "rgba(207, 255, 107, 0.38)"
    }
  }
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />{" "}
  </MuiThemeProvider>,
  document.querySelector("#root")
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
