import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Spinner from "../Spinner";

import { Context } from "../../context/Provider";
import { Consumer } from "../../context/Provider";
import { DebounceInput } from "react-debounce-input";

function Movies(props) {
  const { popularMovies, fetchPopularMovies, heading } = React.useContext(
    Context
  );

  const [search, setSearch] = useState("");

  //ON SUBMIT CALL ACTION TO SEARCH MOVIES

  const onChangeHandler = event => {
    setSearch(event.target.value);
    //THIS IS WORKING!!!!!!
    console.log("sent", event.target.value);
  };
  {
  }

  //To increment value for page to load

  const fetchAndIncrement = () => {
    let page = 1;
    page++;
    fetchPopularMovies(page);
  };

  return (
    <div className="movies">
      <div className="movies__form ">
        <div
          // onSubmit={onSubmit}
          className="movies__form__content container flex items-center justify-center"
        >
          <i className="fas fa-search" />
          {/* <input
            className="movies__search  flex-1"
            type="text"
            name="searchMovies"
            placeholder="Search"
            value={search}
            onChange={onChangeHandler}
            onSubmit={onSubmit}
          /> */}

          <DebounceInput
            minLength={4}
            debounceTimeout={1000}
            onChange={onChangeHandler}
            placeholder="Search"
            className="movies__search  flex-1"
          />
        </div>
      </div>
      <h1>{heading}</h1>
      <div className="movies__grid container mr-auto ml-auto ">
        <div className=" flex flex-wrap justify-between">
          {popularMovies
            ? popularMovies.map(item => (
                <Movie poster={item.poster_path} id={item.id} key={item.id} />
              ))
            : "no"}
        </div>

        <button className="load-more-button bg-transparent  font-semibold hover:text-white   hover:border-transparent ">
          Load More
        </button>
      </div>
    </div>
  );
}
export default Movies;
