import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import Spinner from "../Spinner";
import { Context } from "../../context/Provider";

import { DebounceInput } from "react-debounce-input";

function Movies(props) {
  const {
    popularMovies,
    fetchPopularMovies,
    searchMovies,
    searchResults,
    fetchAndIncrement
  } = React.useContext(Context);

  const [search, setSearch] = useState("");
  const [showSpinner, setShowSpinner] = useState(true);

  //ON SUBMIT CALL ACTION TO SEARCH MOVIES

  const onChangeHandler = event => {
    setSearch(event.target.value);

    if (event.target.value === "") {
      fetchPopularMovies();
    } else {
      searchMovies(event.target.value);
    }
  };
  {
  }

  useEffect(() => {
    setShowSpinner(false);
  }, []);
  return (
    <div className="movies">
      <div className="movies__form ">
        <div
          // onSubmit={onSubmit}
          className="movies__form__content container flex items-center justify-center"
        >
          <i className="fas fa-search" />

          <DebounceInput
            minLength={0}
            debounceTimeout={1000}
            onChange={onChangeHandler}
            placeholder="Search"
            className="movies__search  flex-1"
          />
        </div>
      </div>

      <div className="movies__grid container mr-auto ml-auto ">
        <h1 className="movies__grid__heading">
          {search === "" || search === null
            ? "Popular Movies"
            : "Search Results"}
        </h1>
        <div className="movies__grid__container flex flex-wrap justify-between">
          {/* AKO JE SEARCH RESPONSE PUN ISPISI NJEGA, ako je prazan ispisi popular movies */}

          {search === "" || search === null
            ? popularMovies.map(item => (
                <Movie
                  poster={item.poster_path}
                  id={item.id}
                  key={Math.random() * 1000000000}
                  title={item.original_title}
                />
              ))
            : searchResults.map(item => (
                <Movie
                  poster={item.poster_path}
                  id={item.id}
                  key={Math.random() * 1000000000}
                />
              ))}
        </div>

        {search === "" || search === null ? (
          <button
            onClick={fetchAndIncrement}
            className="load-more-button bg-transparent  font-semibold hover:text-white   hover:border-transparent "
          >
            Load More
          </button>
        ) : null}
      </div>
    </div>
  );
}
export default Movies;
