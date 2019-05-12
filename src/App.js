import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./scss/main.scss";

import Navbar from "./components/Navbar";
import Homepage from "./components/homepage/Homepage";
import MovieInfo from "./components/single-movie/MovieInfo";
import Movie from "./components/homepage/Movie";

import { Provider } from "./context/Provider";

function App() {

  return (
    <Provider>
      <Router>
        <React.Fragment>
          <Navbar />
          <div className="App ">
            <Switch>
              <Route path="/" exact component={Homepage} />
              <Route path="/:id" exact component={MovieInfo} />
            </Switch>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
