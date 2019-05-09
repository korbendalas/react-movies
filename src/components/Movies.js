import React, { useState } from "react";
import Movie from "./Movie";

function Movies() {
  const [search, setSearch] = useState("");

  //ON SUBMIT CALL ACTION TO SEARCH MOVIES

  const onChangeHandler = event => {
    setSearch(event.target.value);
  };

  return (
    <div className="movies">
      <div className="movies__form ">
        <form className="movies__form__content container flex items-center justify-center">
          <i className="fas fa-search" />
          <input
            className="movies__search  flex-1"
            type="text"
            name="searchMovies"
            placeholder="Search"
            value={search}
            onChange={onChangeHandler}
          />
        </form>
      </div>

      <div className="movies__grid container mr-auto ml-auto flex flex-wrap">
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
        <Movie />
      </div>
      {search}
    </div>
  );
}
export default Movies;
