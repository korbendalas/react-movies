import React from "react";
import ReactDOM from "react-dom";
import { ContextProvider as Provider } from "./context/ContextProvider";
import store from "./store";
import App from "./App";

ReactDOM.render(
  <Provider>
    <App />
  </Provider>,
  document.getElementById("root")
);
