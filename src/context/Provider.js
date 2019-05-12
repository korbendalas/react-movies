import React, { useState, useEffect } from "react";
import axios from "axios";

export const Context = React.createContext();
export const apiKey = "975095b34dd7c4ff9937603d683d6501";

export function Provider(props) {
  //STATE *******************************************************************

  const [mostPopularMovie, setMostPopularMovie] = useState({
    heading: "Naslov",
    description: "Opis",
    backdrop_path: ""
  });
  const [popularMovies, setPopularMovies] = useState([]);

  const [heading, setHeader] = useState("Popular Movies");

  // END - STATE*********************************************END-STATE************************************

  //*********************************FETHCHING POPULAR MOVIES FUNCTION ********************************************

  function fetchPopularMovies(page = 1) {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`
      )

      .then(res => {
        //Set Homepage currently most popular movie
        setMostPopularMovie({
          heading: res.data.results[0].original_title,
          description: res.data.results[0].overview,
          backdrop_path: res.data.results[0].backdrop_path
        });

        //Set a list of 20 most popular movies on first load
        setPopularMovies(...popularMovies, res.data.results);

        console.log("MOVIES RESPONSE", res.data.results);
      })
      .catch(err => console.log(err));
  }

  // *****************LIFECYLCLE***************************************

  useEffect(() => {
    fetchPopularMovies();
  }, []);

  return (
    //Value
    <Context.Provider
      value={{ mostPopularMovie, popularMovies, heading, fetchPopularMovies }}
    >
      {props.children}
    </Context.Provider>
  );
}

//Import this in component to acces state
export const Consumer = Context.Consumer;
